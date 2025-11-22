import { TStorageType } from '@/typescripts/enum/common.enum';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef } from 'react';

// Storage types enum

// Configuration interface for each storage cleanup
interface StorageCleanupConfig {
  storageType: TStorageType;
  keys?: string[]; // Specific keys to clear
  clearAll?: boolean; // Clear all data for the storage type
  customClearFn?: () => void; // Custom cleanup function
}

// Main hook configuration
interface UseRouteStorageCleanupConfig {
  targetRoutes: string[]; // Routes to monitor (cleanup when leaving these routes)
  storageConfigs: StorageCleanupConfig[]; // Multiple storage cleanup configurations
  excludeRoutes?: string[]; // Routes to exclude from cleanup
  delay?: number; // Delay before cleanup (in ms)
  onCleanup?: (route: string) => void; // Callback after cleanup
  onRouteChange?: (from: string, to: string) => void; // Route change callback
}

export const useRouteStorageCleanup = (configs: UseRouteStorageCleanupConfig[]) => {
  const router = useRouter();
  const previousRoute = useRef<string>(router.asPath);
  // Fixed: Changed to store Sets directly indexed by config index
  const cleanupExecuted = useRef<Map<number, Set<string>>>(new Map());

  const clearLocalStorage = useCallback((keys?: string[], clearAll = false) => {
    if (typeof window === 'undefined') return;

    if (clearAll) {
      localStorage.clear();
    } else if (keys && keys.length > 0) {
      keys.forEach(key => localStorage.removeItem(key));
    }
  }, []);

  const clearSessionStorage = useCallback((keys?: string[], clearAll = false) => {
    if (typeof window === 'undefined') return;

    if (clearAll) {
      sessionStorage.clear();
    } else if (keys && keys.length > 0) {
      keys.forEach(key => sessionStorage.removeItem(key));
    }
  }, []);

  const clearCookies = useCallback((keys?: string[], clearAll = false) => {
    if (typeof window === 'undefined') return;

    if (clearAll) {
      document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
      });
    } else if (keys && keys.length > 0) {
      keys.forEach(key => {
        document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
      });
    }
  }, []);

  const executeStorageCleanup = useCallback(
    (storageConfig: StorageCleanupConfig) => {
      try {
        switch (storageConfig.storageType) {
          case TStorageType.LOCAL_STORAGE:
            clearLocalStorage(storageConfig.keys, storageConfig.clearAll);
            break;

          case TStorageType.SESSION_STORAGE:
            clearSessionStorage(storageConfig.keys, storageConfig.clearAll);
            break;

          case TStorageType.COOKIES:
            clearCookies(storageConfig.keys, storageConfig.clearAll);
            break;

          case TStorageType.CUSTOM:
            if (storageConfig.customClearFn) {
              storageConfig.customClearFn();
            }
            break;
        }
      } catch (error) {
        console.error('Error during storage cleanup:', error);
      }
    },
    [clearLocalStorage, clearSessionStorage, clearCookies]
  );

  const shouldCleanupForRoute = useCallback(
    (route: string, config: UseRouteStorageCleanupConfig): boolean => {
      const isTargetRoute = config.targetRoutes.some(targetRoute => {
        return (
          route === targetRoute ||
          route.startsWith(targetRoute + '/') ||
          route.startsWith(targetRoute + '?')
        );
      });

      // Check if route is excluded
      const isExcludedRoute =
        config.excludeRoutes?.some(excludeRoute => {
          return (
            route === excludeRoute ||
            route.startsWith(excludeRoute + '/') ||
            route.startsWith(excludeRoute + '?')
          );
        }) || false;

      return isTargetRoute && !isExcludedRoute;
    },
    []
  );

  // Perform the actual cleanup for a specific config
  const performCleanup = useCallback(
    (fromRoute: string, config: UseRouteStorageCleanupConfig, configIndex: number) => {
      // Fixed: Use only fromRoute as the cleanup key since configIndex is already the Map key
      const cleanupKey = fromRoute;

      // Get or create cleanup tracking set for this config
      if (!cleanupExecuted.current.has(configIndex)) {
        cleanupExecuted.current.set(configIndex, new Set());
      }
      const configCleanupSet = cleanupExecuted.current.get(configIndex)!;

      // Prevent duplicate cleanup for the same route transition
      if (configCleanupSet.has(cleanupKey)) return;

      const cleanup = () => {
        // Execute all storage cleanup configurations
        config.storageConfigs.forEach(storageConfig => {
          executeStorageCleanup(storageConfig);
        });

        // Mark this route as cleaned for this config
        configCleanupSet.add(cleanupKey);

        // Call cleanup callback
        config.onCleanup?.(fromRoute);
      };

      // Apply delay if specified
      if (config.delay && config.delay > 0) {
        setTimeout(cleanup, config.delay);
      } else {
        cleanup();
      }
    },
    [executeStorageCleanup]
  );

  const handleRouteChange = useCallback(
    (url: string) => {
      const fromRoute = previousRoute.current;
      const toRoute = url;

      // Process each configuration independently
      configs.forEach((config, index) => {
        // Notify about route change
        config.onRouteChange?.(fromRoute, toRoute);

        const shouldCleanupFrom = shouldCleanupForRoute(fromRoute, config);
        const shouldCleanupTo = shouldCleanupForRoute(toRoute, config);

        if (shouldCleanupFrom && fromRoute !== toRoute && !shouldCleanupTo) {
          performCleanup(fromRoute, config, index);
        }

        // Reset cleanup tracking when entering a new target route
        if (shouldCleanupTo) {
          const configCleanupSet = cleanupExecuted.current.get(index);
          if (configCleanupSet) {
            configCleanupSet.clear();
          }
        }
      });

      // Update previous route reference
      previousRoute.current = toRoute;
    },
    [configs, shouldCleanupForRoute, performCleanup]
  );

  // Set up Next.js router event listeners
  useEffect(() => {
    // Initialize with current route
    previousRoute.current = router.asPath;

    // Subscribe to route change events
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('beforeHistoryChange', handleRouteChange);

    // Cleanup listeners on unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('beforeHistoryChange', handleRouteChange);
    };
  }, [router, handleRouteChange]);

  // Manual cleanup function (can be called programmatically)
  const manualCleanup = useCallback(
    (configIndex?: number) => {
      const currentRoute = router.asPath;

      if (configIndex !== undefined) {
        // Cleanup for specific config
        const config = configs[configIndex];
        if (config && shouldCleanupForRoute(currentRoute, config)) {
          const configCleanupSet = cleanupExecuted.current.get(configIndex);
          if (configCleanupSet) {
            // Fixed: Use only currentRoute as the cleanup key
            configCleanupSet.delete(currentRoute);
          }
          performCleanup(currentRoute, config, configIndex);
        }
      } else {
        // Cleanup for all configs
        configs.forEach((config, index) => {
          if (shouldCleanupForRoute(currentRoute, config)) {
            const configCleanupSet = cleanupExecuted.current.get(index);
            if (configCleanupSet) {
              // Fixed: Use only currentRoute as the cleanup key
              configCleanupSet.delete(currentRoute);
            }
            performCleanup(currentRoute, config, index);
          }
        });
      }
    },
    [router.asPath, configs, shouldCleanupForRoute, performCleanup]
  );

  // Check if current route is a target route for any config
  const isTargetRoute = configs.some(config => shouldCleanupForRoute(router.asPath, config));

  return {
    currentRoute: router.asPath,
    previousRoute: previousRoute.current,
    manualCleanup,
    isTargetRoute,
  };
};
