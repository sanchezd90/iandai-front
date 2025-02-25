import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import theme from '@/app/theme';

interface ChipsProps {    
  labels: string[];
  onClick: (label: string) => void;
  selectedLabel: string;
}

export default function Chips({ labels, onClick, selectedLabel }: ChipsProps) {
  return (
    <Stack
      direction="row"
      useFlexGap
      spacing={1}
      flexWrap="wrap"
      justifyContent="flex-start"
      alignItems="center"
    >
      {labels.map((label) => (
        <Chip
          key={label}
          label={label}
          variant={selectedLabel === label ? 'filled' : 'outlined'}
          onClick={() => onClick(label)}
          sx={selectedLabel === label ? { backgroundColor: theme.palette.primary.main, color: theme.palette.common.white } : {}}
        />
      ))}
    </Stack>
  );
}