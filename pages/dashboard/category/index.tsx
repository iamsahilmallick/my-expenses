import BackdropLoader from '@/components/Commons/BackdropLoader/BackdropLoader';
import AddEditCategoryDrawer from '@/components/Drawers/AddEditCategoryDrawer';
import { useDebounce } from '@/hooks/commons/useDebounce';
import {
  useCategoryStatusChanger,
  useDeleteCategory,
  useGetCategoryList,
} from '@/hooks/react-query/category/category.hooks';
import { dateOnly } from '@/lib/common/commonUtils';
import { MyCategoryWrapper } from '@/styles/CustomStyled/MyCategoryWrapper';
import DashboardWrapper from '@/theme-layouts/DashboardWrapper/DashboardWrapper';
import { TCategoryDoc } from '@/typescripts/interfaces/category.interfaces';
import CustomButton from '@/ui/CustomButton/CustomButton';
import CustomSwitch from '@/ui/CustomSwitch/CustomSwitch';
import CustomTable from '@/ui/CustomTable/CustomTable';
import DeleteIcon from '@/ui/Icons/DeleteIcon';
import PenIcon from '@/ui/Icons/PenIcon';
import { Box, Stack, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
interface IEditState {
  isEditing: boolean;
  editDoc: TCategoryDoc | null;
}

const Category = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [paginate, setPaginate] = useState({
    page: 1,
    limit: 5,
    search: '',
  });
  const [editState, setEditState] = useState<IEditState>({
    isEditing: false,
    editDoc: null,
  });

  const searchDelay = useDebounce(paginate?.search, 500);
  const {
    data: getAllCats,
    isPending: catPending,
    refetch,
  } = useGetCategoryList({
    page: paginate.page,
    limit: paginate.limit,
    search: searchDelay,
  });

  const { mutate, isPending: statusChangingPending } = useCategoryStatusChanger();
  const { mutate: catDelete, isPending: catDeletePending } = useDeleteCategory();

  const handleEditCategory = (cat: TCategoryDoc) => {
    setEditState({
      isEditing: true,
      editDoc: cat,
    });
    setIsDrawerOpen(true);
  };

  const handleStatusChanger = (id: string, status: boolean) => {
    const payload = {
      id,
      body: {
        isActive: status,
      },
    };
    mutate(payload, {
      onSuccess: res => {
        if (res?.success) {
          refetch();
        }
      },
    });
  };

  const handleDeleteCategory = (id: string) => {
    catDelete(id, {
      onSuccess: res => {
        if (res?.success) {
          refetch();
        }
      },
    });
  };

  return (
    <DashboardWrapper headerTitle="My Categories" backUrl="/">
      {(statusChangingPending || catDeletePending) && (
        <BackdropLoader
          open={statusChangingPending || catDeletePending}
          text={
            statusChangingPending
              ? 'Please Wait... While Changing the status'
              : catDeletePending
                ? 'Please Wait... While Deleting the category'
                : 'Please Wait...'
          }
        />
      )}
      <MyCategoryWrapper>
        <Box className="expenseWrapper">
          <CustomTable
            headList={['Id', 'Icon', 'Category Name', 'Created At', 'Status', 'Action']}
            title="Category Details"
            isAdd
            addOnClick={() => setIsDrawerOpen(true)}
            page={paginate.page}
            totalPages={getAllCats?.pagination?.totalPages}
            isLoading={catPending}
            skeletonRows={7}
            isSearch
            searchValue={paginate.search}
            isEmpty={!catPending && getAllCats?.data?.length === 0}
            emptyText="Categories"
            emptyDescription="No categories found. Please add a new category."
            onSearchChange={value =>
              setPaginate(prev => ({
                ...prev,
                search: value,
                page: 1,
              }))
            }
            onPageChange={value =>
              setPaginate(prev => ({
                ...prev,
                page: value,
              }))
            }
          >
            {getAllCats?.data.map((catItem, index) => (
              <TableRow key={index} className="expenseRow">
                <TableCell className="boldCell">
                  {(paginate.page - 1) * paginate.limit + index + 1}
                </TableCell>
                <TableCell className="boldCell">{catItem.categoryIcon}</TableCell>
                <TableCell>{catItem.title}</TableCell>
                <TableCell>{dateOnly(catItem.createdAt)}</TableCell>
                <TableCell>
                  <CustomSwitch
                    checked={catItem?.isActive}
                    disabled={statusChangingPending}
                    onChange={checked => handleStatusChanger(catItem.id, checked)}
                  />
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" gap={1.5}>
                    <CustomButton
                      variant="contained"
                      color="primary"
                      className="actionBtn"
                      startIcon={<PenIcon IconColor="currentcolor" />}
                      onClick={() => handleEditCategory(catItem)}
                    >
                      Edit
                    </CustomButton>

                    <CustomButton
                      variant="contained"
                      color="error"
                      className="actionBtn"
                      startIcon={<DeleteIcon />}
                      type="button"
                      onClick={() => {
                        handleDeleteCategory(catItem?._id);
                      }}
                    >
                      Delete
                    </CustomButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </CustomTable>
        </Box>
      </MyCategoryWrapper>
      {isDrawerOpen && (
        <AddEditCategoryDrawer
          openDrawer={isDrawerOpen}
          toggleDrawer={() => {
            setIsDrawerOpen(false);
            setEditState({ isEditing: false, editDoc: null });
          }}
          refetch={() => refetch()}
          editData={editState.editDoc}
        />
      )}
    </DashboardWrapper>
  );
};

export default Category;
