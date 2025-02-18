import React from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

interface ActionButtonProps {
    onClick: () => void;
    size?: 'small' | 'medium' | 'large';
    color?: 'default' | 'inherit' | 'primary' | 'secondary';
    variant: 'close' | 'send';
}

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    borderRadius: '50%',   
}));

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, size = 'medium', color = 'default', variant }) => {
    return (
        <StyledIconButton onClick={onClick} size={size} color={color}>
            {variant === 'close' ? <CloseIcon /> : <SendIcon />}
        </StyledIconButton>
    );
};

export default ActionButton;
