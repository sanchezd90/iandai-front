import React from 'react';
import TextField from '@mui/material/TextField';

interface TextInputProps {
    variant: 'single-line' | 'multi-line';
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    rows?: number;
}

const TextInput: React.FC<TextInputProps> = ({ variant, label, value, onChange, rows }) => {
    return (
        <TextField
            label={label}
            value={value}
            onChange={onChange}
            multiline={variant === 'multi-line'}
            rows={variant === 'multi-line' ? rows : undefined}
            variant="outlined"
            fullWidth
        />
    );
};

export default TextInput;
