import CustomDatePicker from '@/ui/CustomDatePicker/CustomDatePicker';
import CustomDrawer from '@/ui/CustomDrawer/CustomDrawer';
import CustomInput from '@/ui/CustomInput/CustomInput';
import CustomSelect from '@/ui/CustomSelect/CustomSelect';
import { Box, Button, MenuItem, Typography } from '@mui/material';
import Link from 'next/link';

interface DrawerProps {
  openDrawer: boolean;
  toggleDrawer: () => void;
}

const AddIncomeDrawer = ({ openDrawer, toggleDrawer }: DrawerProps) => {
  return (
    <CustomDrawer onClose={toggleDrawer} open={openDrawer} className="addExpense">
      <Box className="innerDrawerMain">
        <Typography variant="h2">Add Income Details</Typography>

        <Box className="wrapper_mainFormWrapper">
          <Box className="singleFormWrap">
            <CustomInput placeholder="Enter Title" />
          </Box>
          <Box className="singleFormWrap">
            <CustomSelect initialvalue="Income Category">
              <MenuItem value="food">Food & Drinks</MenuItem>
              <MenuItem value="travel">Travel</MenuItem>
              <MenuItem value="shopping">Shopping</MenuItem>
              <MenuItem value="bills">Bills & Utilities</MenuItem>
              <MenuItem value="health">Health</MenuItem>
              <MenuItem value="others">Others</MenuItem>
            </CustomSelect>
          </Box>
          <Box className="singleFormWrap">
            <CustomInput placeholder="Enter amount" />
          </Box>
          <Box className="singleFormWrap">
            <CustomDatePicker placeholder="Select Date" />
          </Box>
          <Box className="singleFormWrap">
            <CustomSelect initialvalue="Payment Method">
              <MenuItem value="cash">Cash</MenuItem>
              <MenuItem value="card">Credit/Debit Card</MenuItem>
              <MenuItem value="upi">UPI</MenuItem>
              <MenuItem value="bank">Bank Transfer</MenuItem>
            </CustomSelect>
          </Box>
          <Box className="singleFormWrap">
            <CustomInput placeholder="Enter additional details" multiline rows={5} />
          </Box>
        </Box>
        <Box className="btnWrapper">
          <Button fullWidth disableRipple variant="contained" color="primary" LinkComponent={Link}>
            Add Income
          </Button>
        </Box>
      </Box>
    </CustomDrawer>
  );
};

export default AddIncomeDrawer;
