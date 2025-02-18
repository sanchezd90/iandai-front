import React from 'react';
import { Button, styled } from '@mui/material';

interface PillProps {
  label: string;  
  isActive: boolean;
  onClick: () => void;
}

const StyledPill = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  backgroundColor: isActive ? theme.palette.primary.main : theme.palette.background.default,
  color: isActive ? theme.palette.common.white : theme.palette.text.primary,
  borderRadius: '24px',
  padding: '8px 16px',
  border: isActive ? 'none' : `1px solid ${theme.palette.divider}`,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '&:hover': {
    backgroundColor: isActive ? theme.palette.primary.dark : theme.palette.action.hover,
  },
}));

const PillComponent: React.FC<PillProps> = ({ label, isActive, onClick }) => {
  return (
    <StyledPill isActive={isActive} onClick={onClick}>
      {label}
    </StyledPill>
  );
};

export default PillComponent;
