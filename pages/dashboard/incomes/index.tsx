import BackdropLoader from '@/components/Commons/BackdropLoader/BackdropLoader';
import StatusBadge from '@/components/Commons/StatusBadge/StatusBadge';
import AddEditIncomeDrawer from '@/components/Drawers/AddEditIncomeDrawer';
import { useDebounce } from '@/hooks/commons/useDebounce';
import {
  useDeleteIncome,
  useGetIncomeList,
  useUpdatePaymentStatus,
} from '@/hooks/react-query/income/income.hook';
import { dateOnly } from '@/lib/common/commonUtils';
import { MyIncomesWrapper } from '@/styles/CustomStyled/MyIncomesWrapper';
import DashboardWrapper from '@/theme-layouts/DashboardWrapper/DashboardWrapper';
import { IIncomeDoc } from '@/typescripts/interfaces/incomeExpense.interfaces';
import CustomButton from '@/ui/CustomButton/CustomButton';
import CustomTable from '@/ui/CustomTable/CustomTable';
import DeleteIcon from '@/ui/Icons/DeleteIcon';
import PenIcon from '@/ui/Icons/PenIcon';
import { Box, Stack, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';

interface IEditState {
  isEditing: boolean;
  editDoc: IIncomeDoc | null;
}

const Incomes = () => {
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
  const { mutate: catIncome, isPending: catDeletePending } = useDeleteIncome();
  const { mutate: updateStatus, isPending: incomePayStatusPending } = useUpdatePaymentStatus();
  const {
    data: getAllIncomes,
    isPending: incomePending,
    refetch,
  } = useGetIncomeList({
    page: paginate.page,
    limit: paginate.limit,
    search: searchDelay,
  });

  const handleEditIncome = (cat: IIncomeDoc) => {
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

  const handleStatusChange = (id: string, status: 'received' | 'failed') => {
    updateStatus(
      { id, body: { paymentStatus: status } },
      {
        onSuccess: res => {
          if (res?.success) {
            refetch();
          }
        },
      }
    );
  };

  return (
    <DashboardWrapper headerTitle="My Incomes" backUrl="/">
      {(catDeletePending || incomePayStatusPending) && (
        <BackdropLoader
          open={catDeletePending || incomePayStatusPending}
          text={
            catDeletePending
              ? 'Please Wait... While Deleting the income'
              : 'Please Wait... While Updating payment status'
          }
        />
      )}
      <MyIncomesWrapper>
        <Box className="incomeWrapper">
          <CustomTable
            headList={['Item Name', 'Category', 'Amount', 'Payment Status', 'Date', 'Action']}
            title=" Income Details"
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
            emptyText="Incomes"
            emptyDescription="No income found. Please add a new income."
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
                <TableCell>
                  <StatusBadge
                    status={incomeItem.paymentStatus}
                    showActions={incomeItem.paymentStatus === 'upcoming'}
                    onApprove={() => handleStatusChange(incomeItem._id, 'received')}
                    onReject={() => handleStatusChange(incomeItem._id, 'failed')}
                  />
                </TableCell>

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
      </MyIncomesWrapper>
      {isDrawerOpen && (
        <AddEditIncomeDrawer
          openDrawer={isDrawerOpen}
          toggleDrawer={() => {
            setIsDrawerOpen(false);
            setEditState({ isEditing: false, editDoc: null });
          }}
          editData={editState?.editDoc}
          refetch={() => refetch()}
        />
      )}
    </DashboardWrapper>
  );
};

export default Incomes;
