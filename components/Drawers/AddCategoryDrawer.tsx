import { categoryEmojis } from '@/resources/mock';
import CustomDrawer from '@/ui/CustomDrawer/CustomDrawer';
import CustomInput from '@/ui/CustomInput/CustomInput';
import CustomSelect from '@/ui/CustomSelect/CustomSelect';
import { Box, Button, MenuItem, Typography } from '@mui/material';
import Link from 'next/link';
import EmojiPickerCard from '../Commons/EmojiPickerCard/EmojiPickerCard';

interface DrawerProps {
  openDrawer: boolean;
  toggleDrawer: () => void;
}

const AddCategoryDrawer = ({ openDrawer, toggleDrawer }: DrawerProps) => {
  return (
    <CustomDrawer onClose={toggleDrawer} open={openDrawer} className="addExpense">
      <Box className="innerDrawerMain">
        <Typography variant="h2">Add Category Details</Typography>

        <Box className="wrapper_mainFormWrapper">
          <Box className="singleFormWrap">
            <CustomInput placeholder="Enter Title" />
          </Box>
          <Box className="singleFormWrap">
            <CustomSelect initialvalue="Category Type">
              <MenuItem value="food">Expenses</MenuItem>
              <MenuItem value="travel">Incomes</MenuItem>
            </CustomSelect>
          </Box>

          <Box className="singleFormWrap">
            <CustomInput placeholder="Enter additional details" multiline rows={5} />
          </Box>
          <EmojiPickerCard emojis={categoryEmojis} />
        </Box>
        <Box className="btnWrapper">
          <Button fullWidth disableRipple variant="contained" color="primary" LinkComponent={Link}>
            Add Category
          </Button>
        </Box>
      </Box>
    </CustomDrawer>
  );
};

export default AddCategoryDrawer;
