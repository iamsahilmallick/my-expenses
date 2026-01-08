import * as yup from 'yup';

export const categorySchema = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required('Title is required')
    .min(2, 'Title must be at least 2 characters')
    .max(50, 'Title must not exceed 50 characters'),
  type: yup
    .string()
    .required('Type is required')
    .oneOf(['income', 'expense'], 'Type must be either income or expense'),

  description: yup
    .string()
    .trim()
    .max(200, 'Description must not exceed 200 characters')
    .nullable(),

  categoryIcon: yup.string().required('Category icon is required'),
});

export type CategorySchemaType = yup.InferType<typeof categorySchema>;
