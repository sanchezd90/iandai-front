import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
import { Home as HomeIcon } from '@mui/icons-material';

describe('Card Component', () => {
  it('renders without crashing', () => {
    render(<Card />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByTestId('card')).toHaveStyle('border-radius: 10px');
  });

  it('renders children correctly', () => {
    render(<Card label="Test Child" />);
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    render(<Card icon={HomeIcon} />);
    const iconContainer = screen.getByTestId('icon-container');
    expect(iconContainer).toBeInTheDocument();
    expect(iconContainer).toHaveStyle('width: 100%');
    expect(iconContainer).toHaveStyle('font-size: 60px');
  });

  it('has a max width of 240px and height of 240px', () => {
    render(<Card />);
    const cardElement = screen.getByTestId('card');
    expect(cardElement).toHaveStyle('width: 100%');
    expect(cardElement).toHaveStyle('max-width: 240px');
    expect(cardElement).toHaveStyle('height: 240px');    
  });
});
