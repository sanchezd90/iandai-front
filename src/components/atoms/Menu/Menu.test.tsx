import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CustomMenu } from './Menu';

describe('CustomMenu Component', () => {
  const mockHandleSelect = jest.fn();
  const mockHandleClose = jest.fn();
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const renderMenu = (anchorEl: HTMLElement | null) => {
    render(
      <CustomMenu
        anchorEl={anchorEl}
        options={options}
        handleSelect={mockHandleSelect}
        handleClose={mockHandleClose}
      />
    );
  };

  it('should render menu items when anchorEl is provided', () => {
    const anchorEl = document.createElement('div');
    renderMenu(anchorEl);

    options.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('should not render menu items when anchorEl is null', () => {
    renderMenu(null);

    options.forEach(option => {
      expect(screen.queryByText(option)).not.toBeInTheDocument();
    });
  });

  it('should call handleSelect with the correct option when a menu item is clicked', () => {
    const anchorEl = document.createElement('div');
    renderMenu(anchorEl);

    fireEvent.click(screen.getByText('Option 1'));
    expect(mockHandleSelect).toHaveBeenCalledWith('Option 1');
  });  
});
