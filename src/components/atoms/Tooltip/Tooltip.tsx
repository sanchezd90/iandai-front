import React from 'react';
import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from '@mui/material';

// Define an interface for the Tooltip props
interface TooltipProps extends MuiTooltipProps {
    title: string;
    children: React.ReactElement;
    // Add any additional props you want to support
}

// Tooltip component
const Tooltip: React.FC<TooltipProps> = ({ title, children, ...props }) => {
    return (
        <MuiTooltip title={title} {...props}>
            {children}
        </MuiTooltip>
    );
};

export default Tooltip;
