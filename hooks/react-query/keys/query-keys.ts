export enum ProfileQueryEnum {
  login = 'login',
  register = 'register',
  resendOTp = 'resend-otp',
  verifyOTp = 'verify-otp',
  getProfile = 'useer-profile',
  updateProfile = 'update-profile',
}

export enum CategoryQuery {
  create = 'category-create',
  list = 'category-list',
  update = 'category-update',
  delete = 'category-delete',
  statusChanger = 'status-changer',
}

export enum StatsQueryKeys {
  monthly = 'get-monthly',
  topCat = 'get-top-category',
}
