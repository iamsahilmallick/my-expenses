// Storage Encrypt key
export const storageSecretKey = process.env.NEXT_APP_ENCRYPT_KEY
  ? process.env.NEXT_APP_ENCRYPT_KEY
  : 'mySecretKey123';

export const _projectToken = process.env.NEXT_APP_TOKEN_NAME
  ? process.env.NEXT_APP_TOKEN_NAME
  : '_myExpense';

export const fontendURl = process.env.NEXT_APP_FRONTEND_URL
  ? process.env.NEXT_APP_FRONTEND_URL
  : '_myExpense';

export const _isPaymentCompleted = '_isPaymentCompleted';
export const _isProfileUpdated = '_isProfileUpdated';
export const _userRole = '_userRole';
export const _isProfileCompleted = '_isProfileCompleted';
export const _accountVerified = '_accountVerified';
export const _reduxAuthStorage = '_myExpense_db';
