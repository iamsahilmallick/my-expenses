export const PriceSymbool = '₹';
export const ProjectName = 'My Expenses';
export const DateFormat = 'DD/MM/YYYY';

export const UserRoles = ['User', 'Guide'];

export const ImageAccept = ['image/png', 'image/jpeg', 'image/jpg', 'image/jpeg'];

export const FileAccept = [
  'application/pdf',
  'application/msword', // .doc
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
];

export const MaxImageSize = 5000000; // 5MB
export const MaxFileSize = 2000000; // 2MB
export const SubscriptionCheckingCount = 4;
export const ChatMaxFileUploadCount = 1;

export const CountryCode = {
  US: '+1',
  CA: '+1',
  IN: '+91',
  GB: '+44',
  AU: '+61',
};

export const ProjectCurrency = {
  USD: '$',
  INR: '₹',
  GBP: '£',
  AUD: '$',
  CAD: '$',
  EUR: '€',
};

export const tokenDuration = '20d';

export const mediaPaths: Record<string, string> = {
  profileImage: 'users/profile_image',
};

export const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Others', value: 'others' },
];
