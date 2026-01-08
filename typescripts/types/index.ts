export type ResetStep = 'email' | 'otp' | 'reset';

export type DayjsFormat =
  | 'DD MMM YYYY'
  | 'YYYY-MM-DD'
  | 'DD/MM/YYYY'
  | 'MMM D, YYYY'
  | 'dddd, MMM D'
  | 'YYYY/MM/DD'
  | 'D MMMM YYYY'
  | 'MMM YYYY'
  | 'DDD MM YYYY'
  | 'ddd, DD MMM'
  | 'D MMMM, dddd'
  | 'MMM DD, YYYY  hh : mm A'
  | 'ddd MMM'
  | 'DD MMM YYYY hh:mm A'
  | 'DD / MM / YY';

export type TApiParams = {
  page: number;
  limit: number;
  search?: string;
  type?: string;
  isActive?: boolean;
};
