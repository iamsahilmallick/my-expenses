import { Autocomplete, AutocompleteProps } from '@mui/material';
import * as React from 'react';
import { CustomInputWrap } from '../CustomInput/CustomInput';

/* ----------------------------------
 * Minimal constraint (NO any)
 * ---------------------------------- */
type WithOptionalLabel = {
  label?: string;
};

/* ----------------------------------
 * Base props (ALL OPTIONAL)
 * ---------------------------------- */
type BaseProps<T> = {
  options?: readonly T[];
  placeholder?: string;
  width?: number | string;
  getOptionLabel?: (option: T) => string;
};

/* ----------------------------------
 * Component Props
 * ---------------------------------- */
export type CustomAutocompleteProps<
  T extends WithOptionalLabel,
  Multiple extends boolean = false,
> = BaseProps<T> &
  Partial<AutocompleteProps<T, Multiple, false, false>> & {
    multiple?: Multiple;
  };

/* ----------------------------------
 * Component
 * ---------------------------------- */
function CustomAutocomplete<T extends WithOptionalLabel, Multiple extends boolean = false>({
  options = [],
  placeholder = 'Select',
  width = '100%',
  getOptionLabel,
  multiple,
  ...rest
}: CustomAutocompleteProps<T, Multiple>) {
  const resolvedGetOptionLabel = React.useCallback(
    (option: T) => getOptionLabel?.(option) ?? option.label ?? '',
    [getOptionLabel]
  );

  return (
    <Autocomplete<T, Multiple, false, false>
      disablePortal
      options={options}
      multiple={multiple}
      getOptionLabel={resolvedGetOptionLabel}
      sx={{ width }}
      renderInput={params => <CustomInputWrap {...params} placeholder={placeholder} />}
      {...rest}
    />
  );
}

export default CustomAutocomplete;
