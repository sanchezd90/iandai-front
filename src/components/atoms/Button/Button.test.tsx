import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomButton from './Button';

describe('CustomButton Component', () => {
  it('renders the button with the correct label', () => {
    render(<CustomButton label="Click Me" onClick={() => {}} variant="primary" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies the correct styles for the primary variant', () => {
    render(<CustomButton label="Primary" onClick={() => {}} variant="primary" />);
    const button = screen.getByText('Primary');
    expect(button).toHaveStyle('background-color: #333');
    expect(button).toHaveStyle('color: #fff');
  });

  it('applies the correct styles for the secondary variant', () => {
    render(<CustomButton label="Secondary" onClick={() => {}} variant="secondary" />);
    const button = screen.getByText('Secondary');
    expect(button).toHaveStyle('background-color: rgba(0, 0, 0, 0.1)');
    expect(button).toHaveStyle('color: #000');
    expect(button).toHaveStyle('border: 2px solid #000');
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<CustomButton label="Click Me" onClick={handleClick} variant="primary" />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
