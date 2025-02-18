import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

// Styled component for the toggle button
const StyledToggleButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px', // Rounded border
  padding: '10px 20px',
  transition: 'background-color 0.3s',
  '&.active': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  '&:not(.active)': {
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.text.primary,
  },
}));

// ToggleButton component
const ToggleButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <StyledToggleButton
      className={isActive ? 'active' : ''}
      onClick={handleToggle}
    >
      {isActive ? 'Active' : 'Inactive'}
    </StyledToggleButton>
  );
};

export default ToggleButton;
