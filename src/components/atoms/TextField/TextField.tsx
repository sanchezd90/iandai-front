import React from 'react';
import TextField from '@mui/material/TextField';
import theme from '@/app/theme';
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
            sx={{
                color: theme.palette.primary.main,
                '& .MuiOutlinedInput-notchedOutline.MuiOutlinedInput-notchedOutline': {
                    borderColor: theme.palette.primary.main,
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: theme.palette.primary.main,
                },
            }}
        />
    );
};

export default TextInput;
