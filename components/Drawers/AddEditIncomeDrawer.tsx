import { useGetCategoryList } from '@/hooks/react-query/category/category.hooks';
import { useCreateIncome, useUpdateIncome } from '@/hooks/react-query/income/income.hook';
import { toSentenceCase, toYMD } from '@/lib/common/commonUtils';
import { incomeSchema, IncomeSchemaType } from '@/lib/schemas/incomeExpense.schema';
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

const AddEditIncomeDrawer = ({ openDrawer, toggleDrawer, editData, refetch }: DrawerProps) => {
  const isEditMode = Boolean(editData);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IncomeSchemaType>({
    resolver: yupResolver(incomeSchema),
    defaultValues: {
      title: '',
      amount: undefined,
      categoryId: '',
      incomeDate: '',
      description: null,
      paymentMethod: undefined,
    },
  });
  const { data: categoryList, isPending: categoryPending } = useGetCategoryList({
    page: 1,
    limit: 100,
    type: 'income',
  });
  const { mutate: createIncome, isPending: createPending } = useCreateIncome();
  const { mutate: updateIncome, isPending: updatePending } = useUpdateIncome();

  const categoryOptions = useMemo(() => {
    if (!categoryList?.data) return [];
    return categoryList.data.map(item => ({
      id: item.id,
      label: item.title,
    }));
  }, [categoryList]);

  const onSubmit = (data: IncomeSchemaType) => {
    const payload = {
      title: data.title,
      amount: String(data.amount),
      description: data.description || '',
      categoryId: data.categoryId,
      paymentMethod: data.paymentMethod,
      incomeDate: toYMD(data.incomeDate, 'YYYY-MM-DD'),
    };
    if (isEditMode && editData?._id) {
      updateIncome(
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
      createIncome(payload, {
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
        incomeDate: editData.incomeDate ? dayjs(editData.incomeDate).format('YYYY-MM-DD') : '',
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
              ? 'Please Wait... While Updating Category'
              : 'Please Wait... While Creating Category'
          }
        />
      )}
      <Box className="innerDrawerMain">
        <Typography variant="h2">Add Income Details</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                name="incomeDate"
                control={control}
                render={({ field }) => (
                  <CustomDatePicker
                    placeholder="Select Date"
                    value={field.value ? dayjs(field.value) : null}
                    onChange={field.onChange}
                  />
                )}
              />
              <CommonErrorText message={errors.incomeDate?.message} />
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
              {isEditMode ? 'Edit Income' : 'Add Income'}
            </Button>
          </Box>
        </form>
      </Box>
    </CustomDrawer>
  );
};

export default AddEditIncomeDrawer;
