export enum ProfileQueryEnum {
  login = 'login',
  register = 'register',
  resendOTp = 'resend-otp',
  verifyOTp = 'verify-otp',
  getProfile = 'useer-profile',
  updateProfile = 'update-profile',
  changePass = 'update-changePassFunc',
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

export enum IncomeQuery {
  create = 'income-create',
  list = 'income-list',
  update = 'income-update',
  delete = 'income-delete',
}
export enum ExpenseQuery {
  create = 'exepense-create',
  list = 'exepense-list',
  update = 'exepense-update',
  delete = 'exepense-delete',
}
