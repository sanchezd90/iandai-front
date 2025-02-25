'use client';
import React from 'react';
import { useLanguageStore } from '@/store/useLanguageStore';
import CustomButton from '../../atoms/Button/Button';
import { CustomMenu } from '../../atoms/Menu/Menu';

const LanguageSwitcher: React.FC = () => {
    const currentLanguage = useLanguageStore((state) => state.currentLanguage);
    const setLanguage = useLanguageStore((state) => state.setLanguage);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (selectedLabel: string) => {
        const selectedOption = options.find(option => option.label === selectedLabel);
        if (selectedOption) {
            setLanguage(selectedOption.value);
        }
        handleClose();
    };

    const options = [{label:'English', value:'en'}, {label:'Español', value:'es'}];

    const buttonLabel = options.find(option => option.value === currentLanguage)?.label || 'English';

    return (
        <>
            <CustomButton label={buttonLabel} onClick={handleClick} variant="secondary" />
            <CustomMenu
                anchorEl={anchorEl}
                options={options.map(option => option.label)}
                handleSelect={handleSelect}
                handleClose={handleClose}
            />
        </>
    );
};

export default LanguageSwitcher;
