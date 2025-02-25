import React from 'react';
import { IconButton as MuiIconButton } from '@mui/material';
import { styled } from '@mui/system';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface IconButtonProps {          
    onClick: () => void;
    width?: number;
    icon: React.ComponentType<SvgIconProps>;
    color?: string;
}

const StyledIconButton = styled(MuiIconButton)<{ width?: number, customcolor?: string }>(({ width, customcolor }) => ({
    borderRadius: '50%',   
    width: `${width}px`,
    height: `${width}px`,
    backgroundColor: 'transparent',
    border: `1px solid ${customcolor || 'black'}`,
    outline: `2px solid ${customcolor || 'black'}`,
}));

const IconButton: React.FC<IconButtonProps> = ({ onClick, width=40, icon: Icon, color }) => {
    return (    
        <StyledIconButton onClick={onClick} width={width} data-testid="icon-button" customcolor={color}>
            <Icon data-testid="icon-button-icon" sx={{ color: color || 'black', fontSize: `${width/2}px` }}/>
        </StyledIconButton>
    );
};

export default IconButton;
