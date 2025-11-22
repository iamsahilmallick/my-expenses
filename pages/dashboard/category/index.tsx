import AddCategoryDrawer from '@/components/Drawers/AddCategoryDrawer';
import { categoryList } from '@/resources/mock';
import { MyCategoryWrapper } from '@/styles/CustomStyled/MyCategoryWrapper';
import DashboardWrapper from '@/theme-layouts/DashboardWrapper/DashboardWrapper';
import CustomButton from '@/ui/CustomButton/CustomButton';
import CustomSwitch from '@/ui/CustomSwitch/CustomSwitch';
import CustomTable from '@/ui/CustomTable/CustomTable';
import DeleteIcon from '@/ui/Icons/DeleteIcon';
import PenIcon from '@/ui/Icons/PenIcon';
import { Box, Stack, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';

const Category = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <DashboardWrapper headerTitle="My Categories" backUrl="/">
      <MyCategoryWrapper>
        <Box className="expenseWrapper">
          <CustomTable
            headList={['Id', 'Icon', 'Category Name', 'Created At', 'Status', 'Action']}
            title="Category Details"
            isAdd
            addOnClick={() => setIsDrawerOpen(true)}
          >
            {categoryList.map((item, index) => (
              <TableRow key={index} className="expenseRow">
                <TableCell className="boldCell">{item.id}</TableCell>
                <TableCell className="boldCell">{item.icon}</TableCell>
                <TableCell>{item.categoryName}</TableCell>
                <TableCell>{item.createdAt}</TableCell>
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
      </MyCategoryWrapper>
      <AddCategoryDrawer
        openDrawer={isDrawerOpen}
        toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
      />
    </DashboardWrapper>
  );
};

export default Category;
