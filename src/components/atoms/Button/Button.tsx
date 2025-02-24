import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import theme from '../../../app/theme';
interface CustomButtonProps {
  label: string;
  onClick: () => void;
  variant: 'primary' | 'secondary';
}

const StyledButton = styled(Button)<{ customvariant: 'primary' | 'secondary' }>(
  ({ customvariant }) => ({
    backgroundColor: customvariant === 'primary' ? theme.palette.primary.main : 'transparent',
    color: customvariant === 'primary' ? theme.palette.common.white : theme.palette.primary.main,
    padding: '10px 20px',
    borderRadius: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    border: customvariant === 'secondary' ? `2px solid ${theme.palette.primary.main}` : 'none',
    '&:hover': {
      backgroundColor: customvariant === 'primary' ? theme.palette.primary.dark : 'rgba(0, 0, 0, 0.1)',
    },
  })
);

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick, variant }) => {
  // Truncate the label to 30 characters
  const truncatedLabel = label.length > 30 ? `${label.substring(0, 30)}...` : label;

  return (
    <StyledButton onClick={onClick} customvariant={variant}>
      {truncatedLabel}
    </StyledButton>
  );
};

export default CustomButton;