import React from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';

// Styled component for the floating effect
const StyledIconButton = styled(IconButton)({
  backgroundColor: '#6200ea',
  color: '#fff',
  borderRadius: '50%',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: '#3700b3',
    transform: 'translateY(-4px)',
  },
});

// FloatingButton component
interface FloatingButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ icon, onClick }) => {
  return (
    <StyledIconButton onClick={onClick}>
      {icon}
    </StyledIconButton>
  );
};

export default FloatingButton;
