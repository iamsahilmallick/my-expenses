import { PaymentMethodEnum } from '@/typescripts/enum/common.enum';
import * as yup from 'yup';

export const incomeSchema = yup.object({
  title: yup.string().trim().required('Title is required').min(2).max(50),
  amount: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .nullable()
    .typeError('Amount must be a number')
    .positive('Amount must be greater than 0')
    .required('Amount is required'),
  incomeDate: yup.string().trim().required('Income date is required'),
  categoryId: yup.string().trim().required('Category is required'),
  description: yup.string().trim().max(200).nullable(),
  paymentMethod: yup
    .string()
    .required('Payment method is required')
    .oneOf(Object.values(PaymentMethodEnum), 'Invalid payment method'),
});

export type IncomeSchemaType = yup.InferType<typeof incomeSchema>;

export const expenseSchema = yup.object({
  title: yup.string().trim().required('Title is required').min(2).max(50),
  amount: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .nullable()
    .typeError('Amount must be a number')
    .positive('Amount must be greater than 0')
    .required('Amount is required'),
  expenseDate: yup.string().trim().required('Income date is required'),
  categoryId: yup.string().trim().required('Category is required'),
  description: yup.string().trim().max(200).nullable(),
  paymentMethod: yup
    .string()
    .required('Payment method is required')
    .oneOf(Object.values(PaymentMethodEnum), 'Invalid payment method'),
});

export type ExpenseSchemaType = yup.InferType<typeof expenseSchema>;
