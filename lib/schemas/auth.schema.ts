import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  countryCode: yup.string().trim().required(''),
  profileImage: yup
    .mixed()
    .test(
      'file-required',
      'Profile image is required',
      value => value instanceof File || (typeof value === 'string' && value.trim() !== '')
    ),
});

export type LoginSchemaType = yup.InferType<typeof loginSchema>;
