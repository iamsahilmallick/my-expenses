export enum NetworkRoot {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  ERR_NETWORK = 'ERR_NETWORK',
}

export enum LegalOfficeStatus {
  Approve = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'RREJECTED',
}

export enum SocialLoginProvider {
  GOOGLE = 'google',
  APPLE = 'apple',
  FACEBOOK = 'facebook',
}

export enum SocialLogin {
  GOOGLE = 'google',
  FACEBOOK = 'apple',
}

export enum TStorageType {
  LOCAL_STORAGE = 'localStorage',
  SESSION_STORAGE = 'sessionStorage',
  COOKIES = 'cookies',
  CUSTOM = 'custom',
}

export enum PaymentMethodEnum {
  CASH = 'cash',
  CARD = 'card',
  UPI = 'upi',
  BANK = 'bank',
}
export enum PaymentStatusEnum {
  UPCOMING = 'upcoming',
  RECEIVED = 'received',
  FAILED = 'failed',
}
