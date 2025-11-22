import { DayjsFormat } from '@/typescripts/types';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';

dayjs.extend(customParseFormat);
dayjs.extend(utc);

export const isEmptyObject = (obj: Record<string, unknown>): boolean => {
  return Object.keys(obj).length === 0;
};

export const navigateTo = (route: string, replace: boolean = false): void => {
  if (typeof window !== 'undefined') {
    if (replace) {
      window.location.replace(route);
    } else {
      window.location.href = route;
    }
  }
};

/** Prevents any non-numeric input via keyboard */
export const preventNonNumericKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  const char = String.fromCharCode(event.which);
  if (!/^[0-9]$/.test(char)) {
    event.preventDefault();
  }
};
/** Prevents any numeric input via keyboard */
export const preventNumberInputs = (event: React.KeyboardEvent<HTMLInputElement>) => {
  const regex = /[0-9+]/;
  if (regex.test(event.key)) {
    event.preventDefault();
  }
};

/** Prevents non-numeric characters on paste */
export const preventNonNumericPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
  const pasteData = event.clipboardData.getData('text');
  if (!/^\d*$/.test(pasteData)) {
    event.preventDefault();
  }
};

/** Prevents numeric characters on paste */
export const preventNumericPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
  const pasteData = event.clipboardData.getData('text');
  if (/\d/.test(pasteData)) {
    event.preventDefault();
  }
};

export const formatItemText = (items: number, text: string): string => {
  if (items === 0) {
    return `0 ${text}`;
  } else if (items === 1) {
    return `1 ${text}`;
  } else {
    return `${items} ${text}s`;
  }
};

export function parseDuration(duration?: string): number | undefined {
  if (!duration) return undefined;

  const match = duration.match(/^(\d+)([smhdwy])$/);
  if (!match) return undefined;

  const value = parseInt(match[1]!, 10); // match[1] is guaranteed here
  const unit = match[2] as 's' | 'm' | 'h' | 'd' | 'w' | 'y';

  switch (unit) {
    case 's': // seconds
      return value;
    case 'm': // minutes
      return value * 60;
    case 'h': // hours
      return value * 60 * 60;
    case 'd': // days
      return value * 60 * 60 * 24;
    case 'w': // weeks
      return value * 60 * 60 * 24 * 7;
    case 'y': // years (approx 365 days)
      return value * 60 * 60 * 24 * 365;
    default:
      return undefined;
  }
}

export const formatTimer = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const capitalizeFirstLetter = (value: string): string => {
  if (!value) return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const getMailtoLink = (email: string, subject: string, body: string): string => {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const stripHtmlTags = (html: string): string => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};

export const getShortContent = (html: string, maxLength = 100): string => {
  const text = stripHtmlTags(html);
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export function detectBrowser() {
  const { userAgent } = navigator; // Use object destructuring
  if (userAgent.indexOf('Edg') > -1) {
    return 'Microsoft Edge';
  } else if (userAgent.indexOf('Chrome') > -1) {
    return 'Chrome';
  } else if (userAgent.indexOf('Firefox') > -1) {
    return 'Firefox';
  } else if (userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1) {
    return 'Safari';
  } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
    return 'Opera';
  } else if (userAgent.indexOf('Trident') > -1 || userAgent.indexOf('MSIE') > -1) {
    return 'Internet Explorer';
  }

  return 'Unknown';
}

export const downloadFromUrl = (url: string) => {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank');
  }
};

export function truncateText(text: string | undefined | null, maxChars: number): string {
  if (!text) return '';
  return text.length > maxChars ? `${text.slice(0, maxChars)}...` : text;
}

export const openInNewTab = (url: string) => {
  const origin = window.location.origin;
  const validUrl = url.startsWith('http')
    ? url
    : `${origin}${url.startsWith('/') ? url : `/${url}`}`;
  window.open(validUrl, '_blank', 'noopener,noreferrer');
};

export const formatNumberToShortForm = (num: number): string => {
  if (num === null || num === undefined || isNaN(num)) return '0';

  const absNum = Math.abs(num);

  if (absNum >= 1_000_000_000_000) {
    return (num / 1_000_000_000_000).toFixed(1).replace(/\.0$/, '') + 'T';
  } else if (absNum >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  } else if (absNum >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (absNum >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  } else {
    return num.toString();
  }
};

export const dateOnly = (dateTimeStr: string, format: DayjsFormat = 'DD MMM YYYY'): string => {
  if (!dateTimeStr?.includes('T')) return '';
  const datePart = dateTimeStr.split('T')[0];
  return dayjs(datePart).format(format);
};
