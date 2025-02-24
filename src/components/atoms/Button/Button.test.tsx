import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomButton from './Button';
import theme from '../../../app/theme';

describe('CustomButton Component', () => {
  it('renders the button with the correct label', () => {
    render(<CustomButton label="Click Me" onClick={() => {}} variant="primary" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies the correct styles for the primary variant', () => {
    render(<CustomButton label="Primary" onClick={() => {}} variant="primary" />);
    const button = screen.getByText('Primary');
    expect(button).toHaveStyle(`background-color: ${theme.palette.primary.dark}`);
    expect(button).toHaveStyle(`color: ${theme.palette.common.white}`);
    expect(button).toHaveStyle(`box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25)`);
  });

  it('applies the correct styles for the secondary variant', () => {
    render(<CustomButton label="Secondary" onClick={() => {}} variant="secondary" />);
    const button = screen.getByText('Secondary');
    expect(button).toHaveStyle(`background-color: rgba(0, 0, 0, 0.1)`);
    expect(button).toHaveStyle(`color: ${theme.palette.primary.main}`);
    expect(button).toHaveStyle(`border: 2px solid ${theme.palette.primary.main}`);
    expect(button).toHaveStyle(`box-shadow: none`);
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<CustomButton label="Click Me" onClick={handleClick} variant="primary" />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not allow the button label to exceed 33 characters', () => {
    const longLabel = 'This label is definitely more than thirty characters long';
    render(<CustomButton label={longLabel} onClick={() => {}} variant="primary" />);
    const button = screen.getByText('This label is definitely more ...');
    expect(button).toBeInTheDocument();
    expect(button.textContent?.length).toBeLessThanOrEqual(33);
  });
});
