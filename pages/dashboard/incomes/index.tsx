import AddIncomeDrawer from '@/components/Drawers/AddIncomeDrawer';
import { incomeData } from '@/resources/mock';
import { MyIncomesWrapper } from '@/styles/CustomStyled/MyIncomesWrapper';
import DashboardWrapper from '@/theme-layouts/DashboardWrapper/DashboardWrapper';
import CustomButton from '@/ui/CustomButton/CustomButton';
import CustomSwitch from '@/ui/CustomSwitch/CustomSwitch';
import CustomTable from '@/ui/CustomTable/CustomTable';
import DeleteIcon from '@/ui/Icons/DeleteIcon';
import PenIcon from '@/ui/Icons/PenIcon';
import { Box, Stack, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';

const Incomes = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <DashboardWrapper headerTitle="My Incomes" backUrl="/">
      <MyIncomesWrapper>
        <Box className="incomeWrapper">
          <CustomTable
            headList={['Item Name', 'Category', 'Amount', 'Paid By', 'Date', 'Status', 'Action']}
            title=" Income Details"
            isFilter
            isAdd
            addOnClick={() => setIsDrawerOpen(true)}
          >
            {incomeData.map((item, index) => (
              <TableRow key={index} className="incomeRow">
                <TableCell className="boldCell">{item.sourceName}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell className="amountCell">₹{item.amount}</TableCell>
                <TableCell>{item.receivedFrom}</TableCell>
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
      </MyIncomesWrapper>
      <AddIncomeDrawer
        openDrawer={isDrawerOpen}
        toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
      />
    </DashboardWrapper>
  );
};

export default Incomes;
