import React from 'react';
import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from '@mui/material';

interface TooltipProps extends MuiTooltipProps {
    title: string;
    children: React.ReactElement;    
}

const Tooltip: React.FC<TooltipProps> = ({ title, children, ...props }) => {
    return (
        <MuiTooltip title={title} {...props}>
            {children}
        </MuiTooltip>
    );
};

export default Tooltip;
