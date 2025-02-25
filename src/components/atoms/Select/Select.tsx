import React from 'react';
import { Select as MUISelect, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '@/app/theme';

const StyledSelect = styled(MUISelect)(() => ({
  '& .MuiOutlinedInput-notchedOutline.MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,    
  }
}));

interface SelectProps {
  label: string;
  options: Array<{ value: string; label: string }>;
  value: string;
  onChange: (event: SelectChangeEvent<unknown>) => void;
}

const Select: React.FC<SelectProps> = ({ label, options, value, onChange }) => {
  return (
    <FormControl variant="outlined" fullWidth data-testid="select-control">
      <InputLabel id="select-label" sx={{ color: theme.palette.primary.main, '&.Mui-focused': { color: theme.palette.primary.main } }}>{label}</InputLabel>
      <StyledSelect value={value} onChange={onChange} label={label} labelId="select-label" data-testid="select-component">
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default Select;
