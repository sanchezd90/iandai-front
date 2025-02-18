import React from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

interface ActionButtonProps {      
    variant: 'close' | 'send';
    onClick: () => void;
    width?: string;
}

const StyledIconButton = styled(IconButton)<{ width?: string }>(({ width }) => ({
    borderRadius: '50%',   
    width: width || 'auto',
    backgroundColor: 'transparent',
    border: '1px solid black',
    outline: '2px solid black',
}));

const ActionButton: React.FC<ActionButtonProps> = ({ variant, onClick, width }) => {
    return (
        <StyledIconButton onClick={onClick} width={width}>
            {variant === 'close' ? <CloseIcon /> : <SendIcon />}
        </StyledIconButton>
    );
};

export default ActionButton;
