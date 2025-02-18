import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextInput from './TextField';

describe('TextInput Component', () => {
    const mockOnChange = jest.fn();

    it('renders single-line TextInput correctly', () => {
        render(
            <TextInput
                variant="single-line"
                label="Single Line"
                value="Test Value"
                onChange={mockOnChange}
            />
        );

        const inputElement = screen.getByLabelText('Single Line');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveValue('Test Value');
        expect(inputElement).not.toHaveAttribute('rows');
    });

    it('renders multi-line TextInput correctly', () => {
        render(
            <TextInput
                variant="multi-line"
                label="Multi Line"
                value="Test Value"
                onChange={mockOnChange}
                rows={4}
            />
        );

        const inputElement = screen.getByLabelText('Multi Line');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveValue('Test Value');
        expect(inputElement).toHaveAttribute('rows', '4');
    });

    it('calls onChange handler when input value changes', () => {
        render(
            <TextInput
                variant="single-line"
                label="Single Line"
                value=""
                onChange={mockOnChange}
            />
        );

        const inputElement = screen.getByLabelText('Single Line');
        fireEvent.change(inputElement, { target: { value: 'New Value' } });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });
});
