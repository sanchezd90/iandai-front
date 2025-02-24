import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MessageBox from './DialogBox';
import theme from '../../../app/theme';
describe('MessageBox Component', () => {
  it('renders the message correctly for user', () => {
    const message = 'Hello, World!';
    render(<MessageBox message={message} sender="user" />);
    expect(screen.getByText(message)).toBeInTheDocument();    
    expect(screen.getByTestId('message-box')).toHaveStyle(`background-color: ${theme.palette.secondary.dark}`);
  });

  it('renders the message correctly for system', () => {
    const message = 'System Message';
    render(<MessageBox message={message} sender="system" />);
    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByTestId('message-box')).toHaveStyle(`background-color: ${theme.palette.primary.light}`);
  });
});
