import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import theme from '@/app/theme';

interface ChipsProps {    
  options: { label: string; value: string }[];
  onClick: (value: string) => void;
  selectedValue: string;
}

export default function Chips({ options, onClick, selectedValue }: ChipsProps) {
  return (
    <Stack
      direction="row"
      useFlexGap
      spacing={1}
      flexWrap="wrap"
      justifyContent="flex-start"
      alignItems="center"
    >
      {options.map((option) => (
        <Chip
          key={option.value}
          label={option.label}
          variant={selectedValue === option.value ? 'filled' : 'outlined'}
          onClick={() => onClick(option.value)}
          sx={selectedValue === option.value ? { backgroundColor: theme.palette.primary.main, color: theme.palette.common.white } : {}}
        />
      ))}
    </Stack>
  );
}