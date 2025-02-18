import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ActionButton from './ActionButton';

describe('ActionButton Component', () => {
    it('renders without crashing', () => {
        render(<ActionButton onClick={() => {}} variant="close" />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<ActionButton onClick={handleClick} variant="send" />);
        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });    

    it('applies the width prop correctly', () => {
        render(<ActionButton onClick={() => {}} variant="close" width="100px" />);
        const button = screen.getByRole('button');
        expect(button).toHaveStyle('width: 100px');
    });

    it('applies the border and outline styles correctly', () => {
        render(<ActionButton onClick={() => {}} variant="close" />);
        const button = screen.getByRole('button');
        expect(button).toHaveStyle('border: 1px solid black');
        expect(button).toHaveStyle('outline: 2px solid black');
    });
});
