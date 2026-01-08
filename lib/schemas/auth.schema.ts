import * as yup from 'yup';

// Signup form schema
export const signUpSchema = yup.object().shape({
  fullName: yup
    .string()
    .trim()
    .required('Full Name is required')
    .min(2, 'Full Name must be at least 2 characters'),
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
