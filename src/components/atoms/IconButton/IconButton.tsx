import React from 'react';
import { IconButton as MuiIconButton } from '@mui/material';
import { styled } from '@mui/system';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface IconButtonProps {          
    onClick: () => void;
    width?: string;
    icon: React.ComponentType<SvgIconProps>;
}

const StyledIconButton = styled(MuiIconButton)<{ width?: string }>(({ width }) => ({
    borderRadius: '50%',   
    width: width || 'auto',
    backgroundColor: 'transparent',
    border: '1px solid black',
    outline: '2px solid black',
}));

const IconButton: React.FC<IconButtonProps> = ({ onClick, width, icon: Icon }) => {
    return (
        <StyledIconButton onClick={onClick} width={width} data-testid="icon-button">
            <Icon data-testid="icon-button-icon" />
        </StyledIconButton>
    );
};

export default IconButton;
