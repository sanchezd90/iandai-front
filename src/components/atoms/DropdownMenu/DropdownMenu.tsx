'use client';
import React from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { styled } from '@mui/system';

interface DropdownMenuProps {
    options: string[];
    onSelect: (option: string) => void;
    buttonLabel: string;
}

const StyledButton = styled(Button)({

});

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, onSelect, buttonLabel }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (option: string) => {
        onSelect(option);
        handleClose();
    };

    return (
        <>
            <StyledButton onClick={handleClick}>
                {buttonLabel}
            </StyledButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {options.map((option) => (
                    <MenuItem key={option} onClick={() => handleSelect(option)}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default DropdownMenu;
