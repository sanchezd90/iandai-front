'use client';
import React from 'react';
import CustomButton from '../../atoms/Button/Button';
import {CustomMenu} from '../../atoms/Menu/Menu';

interface DropdownMenuProps {
    options: string[];
    onSelect: (option: string) => void;
    buttonLabel: string;
}

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
            <CustomButton label={buttonLabel} onClick={handleClick} variant="secondary" />
            <CustomMenu
                anchorEl={anchorEl}                
                options={options}
                handleSelect={handleSelect}
                handleClose={handleClose}
            />
        </>
    );
};

export default DropdownMenu;
