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
});
