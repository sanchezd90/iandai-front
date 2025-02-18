import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
import { Home as HomeIcon } from '@mui/icons-material';

describe('Card Component', () => {
  it('renders without crashing', () => {
    render(<Card />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(<Card>Test Child</Card>);
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    render(<Card icon={HomeIcon} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
