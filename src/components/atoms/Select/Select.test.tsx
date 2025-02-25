import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from './Select';

describe('Select Component', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  const mockOnChange = jest.fn();

  it('renders the select component with a label', () => {
    render(<Select label="Test Label" options={options} value={''} onChange={mockOnChange} />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('renders the select component with selected option', () => {
    render(<Select label="Test Label" options={options} value={'option1'} onChange={mockOnChange} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('renders the select component with options when clicked', async () => {
    render(<Select label="Test Label" options={options} value={''} onChange={mockOnChange} />);

    const selectComponent = screen.getByLabelText('Test Label');
    fireEvent.mouseDown(selectComponent);

    const listbox = await screen.findByRole('listbox'); 
    expect(listbox).toBeInTheDocument();
    
    options.forEach(async (option) => {
      expect(await screen.findByText(option.label)).toBeInTheDocument();
    });
  });
});