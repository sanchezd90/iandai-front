import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import IconButton from './IconButton';
import { Home as HomeIcon } from '@mui/icons-material';

describe('IconButton Component', () => {
    it('renders without crashing', () => {
        render(<IconButton onClick={() => {}} icon={HomeIcon} />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<IconButton onClick={handleClick} icon={HomeIcon} />);
        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });    

    it('applies the width prop correctly', () => {
        render(<IconButton onClick={() => {}} width="100px" icon={HomeIcon} />);
        const button = screen.getByRole('button');
        expect(button).toHaveStyle('width: 100px');
    });

    it('applies the border and outline styles correctly', () => {
        render(<IconButton onClick={() => {}} icon={HomeIcon} />);
        const button = screen.getByRole('button');
        expect(button).toHaveStyle('border: 1px solid black');
        expect(button).toHaveStyle('outline: 2px solid black');
    });

    it('renders an icon when the icon prop is provided', () => {
        const { getByTestId } = render(<IconButton onClick={() => {}} icon={HomeIcon} />);
        const iconElement = getByTestId('icon-button-icon');
        expect(iconElement).toBeInTheDocument();
    });    
});
