// utils/pageVisibility.ts
type VisibilityChangeCallback = (isVisible: boolean) => void;

export class PageVisibility {
  private static listeners: VisibilityChangeCallback[] = [];

  static init() {
    if (typeof document === 'undefined') return;

    const handleVisibilityChange = () => {
      const isVisible = !document.hidden;
      this.listeners.forEach(cb => cb(isVisible));
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  static onChange(callback: VisibilityChangeCallback) {
    this.listeners.push(callback);

    // Call immediately with current state
    callback(!document.hidden);

    return () => {
      // unsubscribe
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  static isVisible(): boolean {
    if (typeof document === 'undefined') return true; // default server-side
    return !document.hidden;
  }
}
