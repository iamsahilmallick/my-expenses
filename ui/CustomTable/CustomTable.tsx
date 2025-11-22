import { CustomTableWrapper } from '@/styles/CustomStyled/CustomTableWrapper';
import LeftArrowIcon from '@/ui/Icons/LeftArrowIcon';
import RightIcon from '@/ui/Icons/RightIcon';
import AddIcon from '@mui/icons-material/Add';
import {
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import CustomInput from '../CustomInput/CustomInput';
import FilterIcon from '../Icons/FilterIcon';

interface ICommonTableProps {
  children?: React.ReactNode;
  headList: string[];
  title?: string;
  isFilter?: boolean;
  isAdd?: boolean;
  addOnClick?: () => void;
  btnIcon?: React.ReactNode;
}

const CustomTable = ({
  children,
  headList,
  title,
  isFilter,
  btnIcon,
  isAdd,
  addOnClick,
}: ICommonTableProps) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 6;

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <CustomTableWrapper>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        padding="16px"
        className="search_wrapper"
      >
        <Typography variant="h6" className="tableTitle">
          {title}
        </Typography>
        <Stack direction="row" alignItems="center" gap={1.5} className="search_group">
          <CustomInput size="small" placeholder="Search..." className="search_input" />
          {isFilter && (
            <CustomButton className="filter_btn">{btnIcon ? btnIcon : <FilterIcon />}</CustomButton>
          )}
          {isAdd && (
            <CustomButton className="filter_btn" onClick={addOnClick}>
              <AddIcon />
            </CustomButton>
          )}
        </Stack>
      </Stack>

      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              {headList.map((headItem, index) => (
                <TableCell key={index}>{headItem}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>

      <Stack
        className="pagination_stack"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={2.5}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          hideNextButton
          hidePrevButton
        />

        <Stack className="pagination_right" direction="row" alignItems="center" gap={2.5}>
          <Typography variant="body1">Showing 01 out of 06</Typography>
          <Stack className="arrow_btns_stack" direction="row" alignItems="center">
            <CustomButton variant="contained" color="primary" onClick={handlePrev}>
              <LeftArrowIcon IconColor="currentcolor" />
            </CustomButton>
            <CustomButton variant="contained" color="primary" onClick={handleNext}>
              <RightIcon IconColor="currentcolor" />
            </CustomButton>
          </Stack>
        </Stack>
      </Stack>
    </CustomTableWrapper>
  );
};

export default CustomTable;
