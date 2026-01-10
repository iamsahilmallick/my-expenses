import { useCreateCategory, useUpdateCategory } from '@/hooks/react-query/category/category.hooks';
import { categorySchema, CategorySchemaType } from '@/lib/schemas/category.schema';
import { categoryEmojis } from '@/resources/mock';
import { TCategoryDoc } from '@/typescripts/interfaces/category.interfaces';
import CustomDrawer from '@/ui/CustomDrawer/CustomDrawer';
import CustomInput from '@/ui/CustomInput/CustomInput';
import CustomSelect from '@/ui/CustomSelect/CustomSelect';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, MenuItem, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import BackdropLoader from '../Commons/BackdropLoader/BackdropLoader';
import CommonErrorText from '../Commons/CommonErrorText/CommonErrorText';
import EmojiPickerCard from '../Commons/EmojiPickerCard/EmojiPickerCard';

interface DrawerProps {
  openDrawer: boolean;
  toggleDrawer: () => void;
  refetch?: () => void;
  editData?: TCategoryDoc | null;
}

const AddEditCategoryDrawer = ({ openDrawer, toggleDrawer, refetch, editData }: DrawerProps) => {
  const isEditMode = Boolean(editData);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<CategorySchemaType>({
    resolver: yupResolver(categorySchema),
    defaultValues: {
      title: '',
      type: '',
      description: '',
      categoryIcon: '',
    },
  });

  const { mutate: createCategory, isPending: createPending } = useCreateCategory();
  const { mutate: updateCategory, isPending: updatePending } = useUpdateCategory();

  const onSubmit = (data: CategorySchemaType) => {
    const payload = {
      title: data.title,
      type: data.type,
      description: data.description || '',
      categoryIcon: data.categoryIcon,
    };

    if (isEditMode && editData?._id) {
      updateCategory(
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
      createCategory(payload, {
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
        title: editData.title,
        type: editData.type,
        description: editData.description || '',
        categoryIcon: editData.categoryIcon,
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="innerDrawerMain">
          <Typography variant="h2">Add Category Details</Typography>

          <Box className="wrapper_mainFormWrapper">
            <Box className="singleFormWrap">
              <CustomInput
                placeholder="Enter Title"
                {...register('title')}
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            </Box>
            <Box className="singleFormWrap">
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <CustomSelect {...field} initialvalue="Category Type" error={!!errors.type}>
                    <MenuItem value="expense">Expenses</MenuItem>
                    <MenuItem value="income">Incomes</MenuItem>
                  </CustomSelect>
                )}
              />
              <CommonErrorText message={errors?.type?.message} />
            </Box>

            <Box className="singleFormWrap">
              <CustomInput
                placeholder="Enter additional details"
                multiline
                rows={4}
                {...register('description')}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            </Box>
            <Controller
              name="categoryIcon"
              control={control}
              render={({ field }) => (
                <EmojiPickerCard
                  emojis={categoryEmojis}
                  value={field.value}
                  onSelect={emoji => setValue('categoryIcon', emoji, { shouldValidate: true })}
                />
              )}
            />
            <CommonErrorText message={errors?.categoryIcon?.message} />
          </Box>
          <Box className="btnWrapper">
            <Button fullWidth disableRipple variant="contained" color="primary" type="submit">
              {isEditMode ? 'Edit Category' : 'Add Category'}
            </Button>
          </Box>
        </Box>
      </form>
    </CustomDrawer>
  );
};

export default AddEditCategoryDrawer;
