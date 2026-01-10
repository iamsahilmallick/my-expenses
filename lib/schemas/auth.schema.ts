import * as yup from 'yup';

// Signup form schema
export const signUpSchema = yup.object().shape({
  fullName: yup
    .string()
    .trim()
    .required('Full name is required')
    .matches(/^[a-zA-Z\s.'-]{2,50}$/, 'Name should contain only letters and spaces'),
  email: yup.string().trim().required('Email is required').email('Enter a valid email'),
  phone: yup
    .string()
    .trim()
    .required('Phone number is required')
    .matches(/^[0-9]{10,15}$/, 'Enter a valid phone number'),
  password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password cannot exceed 50 characters'),
});

export type SignUpSchemaType = yup.InferType<typeof signUpSchema>;

// Login form schema
export const loginSchema = yup.object().shape({
  email: yup.string().trim().required('Email is required').email('Enter a valid email'),
  password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  isRemember: yup.boolean().default(false),
});

export type LoginSchemaType = yup.InferType<typeof loginSchema>;

// Change Password form schema
export const changePassSchema = yup.object().shape({
  oldPassword: yup.string().trim().required('Old password is required'),
  newPassword: yup
    .string()
    .trim()
    .required('New password is required')
    .test(
      'password-match-old',
      'New password must be different from the old password',
      function passwordDoesNotMatchOld(value) {
        return value !== this.parent.old_password;
      }
    ),
  confirmPassword: yup
    .string()
    .trim()
    .required('Please confirm your new password')
    .oneOf([yup.ref('new_password'), null as unknown as string], 'Passwords must match'),
});

export type ChangePassSchemaType = yup.InferType<typeof changePassSchema>;

export const profileSchema = yup.object().shape({
  fullName: yup
    .string()
    .trim()
    .required('Full name is required')
    .matches(/^[a-zA-Z\s.'-]{2,50}$/, 'Name should contain only letters and spaces'),
  email: yup
    .string()
    .trim()
    .required('Email is required')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Please enter a valid email address'),
  phone: yup.string().trim().required('Phone number is required'),
  profilePic: yup
    .mixed()
    .test(
      'file-required',
      'Image is required',
      value => value instanceof File || (typeof value === 'string' && value.trim() !== '')
    )
    .required('Image is required'),
});

export type ProfileSchemaType = yup.InferType<typeof profileSchema>;
