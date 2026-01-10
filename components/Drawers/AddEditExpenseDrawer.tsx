import { useGetCategoryList } from '@/hooks/react-query/category/category.hooks';
import { useCreateExpense, useUpdateExpense } from '@/hooks/react-query/expense/expense.hook';
import { toSentenceCase, toYMD } from '@/lib/common/commonUtils';
import { expenseSchema, ExpenseSchemaType } from '@/lib/schemas/incomeExpense.schema';
import { PaymentMethodEnum } from '@/typescripts/enum/common.enum';
import { IIncomeDoc } from '@/typescripts/interfaces/incomeExpense.interfaces';
import CustomAutocomplete from '@/ui/CustomAutocomplete/CustomAutocomplete';
import CustomDatePicker from '@/ui/CustomDatePicker/CustomDatePicker';
import CustomDrawer from '@/ui/CustomDrawer/CustomDrawer';
import CustomInput from '@/ui/CustomInput/CustomInput';
import CustomSelect from '@/ui/CustomSelect/CustomSelect';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, MenuItem, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import BackdropLoader from '../Commons/BackdropLoader/BackdropLoader';
import CommonErrorText from '../Commons/CommonErrorText/CommonErrorText';

interface DrawerProps {
  openDrawer: boolean;
  toggleDrawer: () => void;
  refetch?: () => void;
  editData?: IIncomeDoc | null;
}

const AddEditExpenseDrawer = ({ openDrawer, toggleDrawer, editData, refetch }: DrawerProps) => {
  const isEditMode = Boolean(editData);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ExpenseSchemaType>({
    resolver: yupResolver(expenseSchema),
    defaultValues: {
      title: '',
      amount: undefined,
      categoryId: '',
      expenseDate: '',
      description: null,
      paymentMethod: undefined,
    },
  });

  const { data: categoryList, isPending: categoryPending } = useGetCategoryList({
    page: 1,
    limit: 100,
    type: 'expense',
  });
  const { mutate: createExpense, isPending: createPending } = useCreateExpense();
  const { mutate: updateExpense, isPending: updatePending } = useUpdateExpense();

  const categoryOptions = useMemo(() => {
    if (!categoryList?.data) return [];
    return categoryList.data.map(item => ({
      id: item.id,
      label: item.title,
    }));
  }, [categoryList]);

  const onSubmit = (data: ExpenseSchemaType) => {
    const payload = {
      title: data.title,
      amount: String(data.amount),
      description: data.description || '',
      categoryId: data.categoryId,
      paymentMethod: data.paymentMethod,
      expenseDate: toYMD(data.expenseDate, 'YYYY-MM-DD'),
    };
    if (isEditMode && editData?._id) {
      updateExpense(
        { id: editData._id, body: payload },
        {
          onSuccess: res => {
            if (res?.success) {
              toggleDrawer();
              reset();
              refetch?.();
            }
          },
        }
      );
    } else {
      createExpense(payload, {
        onSuccess: res => {
          if (res?.success) {
            toggleDrawer();
            reset();
            refetch?.();
          }
        },
      });
    }
  };

  useEffect(() => {
    if (editData) {
      reset({
        title: editData.title || '',
        amount: editData.amount ?? undefined,
        description: editData.description ?? null,
        categoryId: editData.categoryId?._id ?? '',
        paymentMethod: editData.paymentMethod
          ? (editData.paymentMethod as PaymentMethodEnum)
          : undefined,
        expenseDate: editData.incomeDate ? dayjs(editData.incomeDate).format('YYYY-MM-DD') : '',
      });
    }
  }, [editData, reset]);

  return (
    <CustomDrawer onClose={toggleDrawer} open={openDrawer} className="addExpense">
      {(createPending || updatePending) && (
        <BackdropLoader
          open={createPending || updatePending}
          text={
            isEditMode
              ? 'Please Wait... While Updating Expense'
              : 'Please Wait... While Creating Expense'
          }
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="innerDrawerMain">
          <Typography variant="h2">Add Expense Details</Typography>

          <Box className="wrapper_mainFormWrapper">
            <Box className="singleFormWrap">
              <CustomInput
                placeholder="Enter Title"
                {...register('title')}
                error={Boolean(errors.title)}
                helperText={errors.title?.message}
              />
            </Box>
            <Box className="singleFormWrap">
              <CustomInput
                placeholder="Enter amount"
                {...register('amount', { valueAsNumber: true })}
                error={Boolean(errors.amount)}
                helperText={errors.amount?.message}
              />
            </Box>
            <Box className="singleFormWrap">
              <Controller
                name="categoryId"
                control={control}
                render={({ field }) => {
                  const selectedOption =
                    categoryOptions.find(opt => opt.id === field.value) || null;
                  return (
                    <CustomAutocomplete
                      {...field}
                      options={categoryOptions}
                      value={selectedOption}
                      placeholder="Select Category"
                      loading={categoryPending}
                      onChange={(
                        event: React.SyntheticEvent,
                        value: { id: string; label: string } | null
                      ) => {
                        field.onChange(value ? value.id : '');
                      }}
                      onBlur={field.onBlur}
                    />
                  );
                }}
              />
              <CommonErrorText message={errors.categoryId?.message} />
            </Box>

            <Box className="singleFormWrap">
              <Controller
                name="expenseDate"
                control={control}
                render={({ field }) => (
                  <CustomDatePicker
                    placeholder="Select Date"
                    value={field.value ? dayjs(field.value) : null}
                    onChange={field.onChange}
                  />
                )}
              />
              <CommonErrorText message={errors.expenseDate?.message} />
            </Box>
            <Box className="singleFormWrap">
              <Controller
                name="paymentMethod"
                control={control}
                render={({ field }) => (
                  <CustomSelect
                    {...field}
                    value={field.value || ''}
                    initialvalue={field.value ? field.value : 'Payment Method'}
                  >
                    {Object.values(PaymentMethodEnum).map(item => (
                      <MenuItem value={item} key={item}>
                        {toSentenceCase(item)}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                )}
              />
              <CommonErrorText message={errors.paymentMethod?.message} />
            </Box>
            <Box className="singleFormWrap">
              <CustomInput
                placeholder="Enter additional details"
                multiline
                rows={4}
                {...register('description')}
                error={Boolean(errors.description)}
                helperText={errors.description?.message}
              />
            </Box>
          </Box>
          <Box className="btnWrapper">
            <Button fullWidth disableRipple variant="contained" color="primary" type="submit">
              {isEditMode ? 'Edit Expense' : 'Add Expense'}
            </Button>
          </Box>
        </Box>
      </form>
    </CustomDrawer>
  );
};

export default AddEditExpenseDrawer;
