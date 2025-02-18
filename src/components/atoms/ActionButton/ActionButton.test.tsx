import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ActionButton from './ActionButton';

describe('ActionButton Component', () => {
    it('renders without crashing', () => {
        render(<ActionButton onClick={() => {}} />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<ActionButton onClick={handleClick} />);
        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('applies the correct size and color props', () => {
        render(<ActionButton onClick={() => {}} size="large" color="primary" />);
        const button = screen.getByRole('button');
        expect(button).toHaveClass('MuiIconButton-sizeLarge');
        expect(button).toHaveClass('MuiIconButton-colorPrimary');
    });
});
