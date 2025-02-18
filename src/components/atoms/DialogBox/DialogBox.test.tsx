import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MessageBox from './DialogBox';

describe('MessageBox Component', () => {
  it('renders the message correctly', () => {
    const message = 'Hello, World!';
    render(<MessageBox message={message} sender="user" />);
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('applies correct styles for user sender', () => {
    render(<MessageBox message="User message" sender="user" />);
    const messageBox = screen.getByText('User message');
    expect(messageBox).toHaveStyle('align-self: flex-end');
  });

  it('applies correct styles for other sender', () => {
    render(<MessageBox message="Other message" sender="other" />);
    const messageBox = screen.getByText('Other message');
    expect(messageBox).toHaveStyle('align-self: flex-start');
  });
});
