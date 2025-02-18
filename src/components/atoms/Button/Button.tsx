import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  variant: 'primary' | 'secondary';
}

const StyledButton = styled(Button)<{ customvariant: 'primary' | 'secondary' }>(
  ({ customvariant }) => ({
    backgroundColor: customvariant === 'primary' ? '#000' : 'transparent',
    color: customvariant === 'primary' ? '#fff' : '#000',
    padding: '10px 20px',
    borderRadius: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    border: customvariant === 'secondary' ? '2px solid #000' : 'none',
    '&:hover': {
      backgroundColor: customvariant === 'primary' ? '#333' : 'rgba(0, 0, 0, 0.1)',
    },
  })
);

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick, variant }) => {
  return (
    <StyledButton onClick={onClick} customvariant={variant}>
      {label}
    </StyledButton>
  );
};

export default CustomButton;