import React from 'react';
import { Select as MUISelect, MenuItem, FormControl, InputLabel, SelectChangeEvent } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled component for the Select
const StyledSelect = styled(MUISelect)`
  // Add custom styles here
`;

// Props interface for the Select component
interface SelectProps {
  label: string;
  options: Array<{ value: string; label: string }>;
  value: string;
  onChange: (event: SelectChangeEvent<unknown>) => void;
}

// Select component
const Select: React.FC<SelectProps> = ({ label, options, value, onChange }) => {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>{label}</InputLabel>
      <StyledSelect value={value} onChange={onChange} label={label}>
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
