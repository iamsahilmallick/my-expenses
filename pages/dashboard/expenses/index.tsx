import BackdropLoader from '@/components/Commons/BackdropLoader/BackdropLoader';
import AddEditExpenseDrawer from '@/components/Drawers/AddEditExpenseDrawer';
import { useDebounce } from '@/hooks/commons/useDebounce';
import { useDeleteExpense, useGetExpenseList } from '@/hooks/react-query/expense/expense.hook';
import { dateOnly } from '@/lib/common/commonUtils';
import { MyExpenseWrapper } from '@/styles/CustomStyled/MyExpenseWrapper';
import DashboardWrapper from '@/theme-layouts/DashboardWrapper/DashboardWrapper';
import { IExpenseDoc } from '@/typescripts/interfaces/incomeExpense.interfaces';
import CustomButton from '@/ui/CustomButton/CustomButton';
import CustomTable from '@/ui/CustomTable/CustomTable';
import DeleteIcon from '@/ui/Icons/DeleteIcon';
import PenIcon from '@/ui/Icons/PenIcon';
import { Box, Stack, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
interface IEditState {
  isEditing: boolean;
  editDoc: IExpenseDoc | null;
}
const Expenses = () => {
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
  const { mutate: catIncome, isPending: catDeletePending } = useDeleteExpense();
  const {
    data: getAllIncomes,
    isPending: incomePending,
    refetch,
  } = useGetExpenseList({
    page: paginate.page,
    limit: paginate.limit,
    search: searchDelay,
  });

  const handleEditIncome = (cat: IExpenseDoc) => {
    setEditState({
      isEditing: true,
      editDoc: cat,
    });
    setIsDrawerOpen(true);
  };

  const handleDeleteIncome = (id: string) => {
    catIncome(id, {
      onSuccess: res => {
        if (res?.success) {
          refetch();
        }
      },
    });
  };
  return (
    <DashboardWrapper headerTitle="My Expenses" backUrl="/">
      {catDeletePending && (
        <BackdropLoader
          open={catDeletePending}
          text={catDeletePending ? 'Please Wait... While Deleting the income' : 'Please Wait...'}
        />
      )}
      <MyExpenseWrapper>
        <Box className="expenseWrapper">
          <CustomTable
            headList={['Item Name', 'Category', 'Amount', 'Date', 'Action']}
            title=" Expense Details"
            isFilter
            isAdd
            addOnClick={() => setIsDrawerOpen(true)}
            page={paginate.page}
            totalPages={getAllIncomes?.pagination?.totalPages}
            isLoading={incomePending}
            skeletonRows={7}
            isSearch
            searchValue={paginate.search}
            isEmpty={!incomePending && getAllIncomes?.data?.length === 0}
            emptyText="Expenses"
            emptyDescription="No expense found. Please add a new expense."
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
            {getAllIncomes?.data?.map((incomeItem, index) => (
              <TableRow key={index} className="incomeRow">
                <TableCell className="boldCell">{incomeItem.title}</TableCell>
                <TableCell>{incomeItem.categoryId?.title}</TableCell>
                <TableCell className="amountCell">₹{incomeItem.amount}</TableCell>
                <TableCell>{dateOnly(incomeItem.createdAt)}</TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" gap={1.5}>
                    <CustomButton
                      variant="contained"
                      color="primary"
                      className="actionBtn"
                      startIcon={<PenIcon IconColor="currentcolor" />}
                      onClick={() => handleEditIncome(incomeItem)}
                    >
                      Edit
                    </CustomButton>

                    <CustomButton
                      variant="contained"
                      color="error"
                      className="actionBtn"
                      startIcon={<DeleteIcon />}
                      onClick={() => {
                        handleDeleteIncome(incomeItem?._id);
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
      </MyExpenseWrapper>
      {isDrawerOpen && (
        <AddEditExpenseDrawer
          openDrawer={isDrawerOpen}
          toggleDrawer={() => {
            setIsDrawerOpen(false);
            setEditState({ isEditing: false, editDoc: null });
          }}
          editData={editState?.editDoc || null}
          refetch={() => refetch()}
        />
      )}
    </DashboardWrapper>
  );
};

export default Expenses;
