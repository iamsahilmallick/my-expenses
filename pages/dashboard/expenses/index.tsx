import AddExpenseDrawer from '@/components/Drawers/AddExpenseDrawer';
import { expenseData } from '@/resources/mock';
import { MyExpenseWrapper } from '@/styles/CustomStyled/MyExpenseWrapper';
import DashboardWrapper from '@/theme-layouts/DashboardWrapper/DashboardWrapper';
import CustomButton from '@/ui/CustomButton/CustomButton';
import CustomSwitch from '@/ui/CustomSwitch/CustomSwitch';
import CustomTable from '@/ui/CustomTable/CustomTable';
import DeleteIcon from '@/ui/Icons/DeleteIcon';
import PenIcon from '@/ui/Icons/PenIcon';
import { Box, Stack, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';

const Expenses = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <DashboardWrapper headerTitle="My Expenses" backUrl="/">
      <MyExpenseWrapper>
        <Box className="expenseWrapper">
          <CustomTable
            headList={['Item Name', 'Category', 'Amount', 'Paid By', 'Date', 'Status', 'Action']}
            title=" Expense Details"
            isFilter
            isAdd
            addOnClick={() => setIsDrawerOpen(true)}
          >
            {expenseData.map((item, index) => (
              <TableRow key={index} className="expenseRow">
                <TableCell className="boldCell">{item.itemName}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell className="amountCell">₹{item.amount}</TableCell>
                <TableCell>{item.paidBy}</TableCell>
                <TableCell>{item.date}</TableCell>

                <TableCell>
                  <CustomSwitch />
                </TableCell>

                <TableCell>
                  <Stack direction="row" alignItems="center" gap={1.5}>
                    <CustomButton
                      variant="contained"
                      color="primary"
                      className="actionBtn"
                      startIcon={<PenIcon IconColor="currentcolor" />}
                    >
                      Edit
                    </CustomButton>

                    <CustomButton
                      variant="contained"
                      color="error"
                      className="actionBtn"
                      startIcon={<DeleteIcon />}
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
      <AddExpenseDrawer
        openDrawer={isDrawerOpen}
        toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
      />
    </DashboardWrapper>
  );
};

export default Expenses;
