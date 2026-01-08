import EmptyState from '@/components/Commons/EmptyState/EmptyState';
import { CustomTableWrapper } from '@/styles/CustomStyled/CustomTableWrapper';
import { ICommonTableProps } from '@/typescripts/interfaces/common.interfaces';
import LeftArrowIcon from '@/ui/Icons/LeftArrowIcon';
import RightIcon from '@/ui/Icons/RightIcon';
import AddIcon from '@mui/icons-material/Add';
import {
  Pagination,
  Skeleton,
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

const CustomTable = ({
  children,
  headList,
  title,
  isFilter,
  btnIcon,
  isAdd,
  addOnClick,
  page = 1,
  totalPages = 1,
  onPageChange,
  isLoading,
  skeletonRows,
  isSearch = false,
  searchValue,
  searchPlaceholder = 'Search...',
  onSearchChange,
  isEmpty = false,
  emptyText,
  emptyDescription,
}: ICommonTableProps) => {
  const [currentPage, setCurrentPage] = React.useState(page);

  const handlePageChange = (value: number) => {
    setCurrentPage(value);
    if (!onPageChange) return;
    onPageChange(value);
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
          {isSearch && (
            <CustomInput
              size="small"
              placeholder={searchPlaceholder}
              className="search_input"
              value={searchValue}
              onChange={e => onSearchChange?.(e.target.value)}
            />
          )}

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
          <TableBody>
            {isLoading ? (
              Array.from({ length: skeletonRows || 5 }).map((_, rowIndex) => (
                <TableRow key={rowIndex}>
                  {headList.map((_, cellIndex) => (
                    <TableCell key={cellIndex}>
                      <Skeleton variant="rectangular" height={25} />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : isEmpty ? (
              <TableRow>
                <TableCell colSpan={headList.length}>
                  <EmptyState text={emptyText} description={emptyDescription} />
                </TableCell>
              </TableRow>
            ) : (
              children
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {totalPages > 1 && (
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
            onChange={(_, value) => handlePageChange(value)}
            variant="outlined"
            shape="rounded"
            hideNextButton
            hidePrevButton
          />

          <Stack className="pagination_right" direction="row" alignItems="center" gap={2.5}>
            <Typography variant="body1">
              {' '}
              Showing {page} out of {totalPages}
            </Typography>
            <Stack className="arrow_btns_stack" direction="row" alignItems="center">
              <CustomButton
                variant="contained"
                color="primary"
                disabled={page <= 1 || !onPageChange}
                onClick={() => handlePageChange(page - 1)}
              >
                <LeftArrowIcon IconColor="currentcolor" />
              </CustomButton>
              <CustomButton
                variant="contained"
                color="primary"
                disabled={page >= totalPages || !onPageChange}
                onClick={() => handlePageChange(page + 1)}
              >
                <RightIcon IconColor="currentcolor" />
              </CustomButton>
            </Stack>
          </Stack>
        </Stack>
      )}
    </CustomTableWrapper>
  );
};

export default CustomTable;
