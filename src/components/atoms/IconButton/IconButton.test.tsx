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
        render(<IconButton onClick={() => {}} width={100} icon={HomeIcon} />);
        const button = screen.getByRole('button');
        expect(button).toHaveStyle('width: 100px');
    });

    it('applies the default border and outline styles correctly', () => {
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

    it('applies the width prop correctly to both button and icon', () => {
        const testWidth = 100;
        render(<IconButton onClick={() => {}} width={testWidth} icon={HomeIcon} />);
        const button = screen.getByRole('button');
        const icon = screen.getByTestId('icon-button-icon');
        
        expect(button).toHaveStyle(`width: ${testWidth}px`);
        expect(button).toHaveStyle(`height: ${testWidth}px`);
        expect(icon).toHaveStyle(`font-size: ${testWidth / 2}px`);
    });

    it('applies default width when no width prop is provided', () => {
        render(<IconButton onClick={() => {}} icon={HomeIcon} />);
        const button = screen.getByRole('button');
        const icon = screen.getByTestId('icon-button-icon');
        
        expect(button).toHaveStyle('width: 40px');
        expect(button).toHaveStyle('height: 40px');
        expect(icon).toHaveStyle('font-size: 20px');
    });

    it('applies the custom color prop correctly to border and icon', () => {
        const testColor = 'red';
        render(<IconButton onClick={() => {}} icon={HomeIcon} color={testColor} />);
        const button = screen.getByRole('button');
        const icon = screen.getByTestId('icon-button-icon');
        
        expect(button).toHaveStyle(`border: 1px solid ${testColor}`);
        expect(button).toHaveStyle(`outline: 2px solid ${testColor}`);
        expect(icon).toHaveStyle(`color: ${testColor}`);
    });   
});
