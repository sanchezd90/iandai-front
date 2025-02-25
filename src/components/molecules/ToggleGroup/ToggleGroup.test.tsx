import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToggleGroup from './ToggleGroup';

describe('ToggleGroup Component', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];

  const onChangeMock = jest.fn();

  it('renders all toggle buttons', () => {
    render(<ToggleGroup value={null} onChange={onChangeMock} options={options} />);
    
    options.forEach(option => {
      expect(screen.getByLabelText(option.label)).toBeInTheDocument();
    });
  });

  it('calls onChange with the correct value when a button is clicked', () => {
    render(<ToggleGroup value={null} onChange={onChangeMock} options={options} />);
    
    const button = screen.getByLabelText('Option 1');
    fireEvent.click(button);
    
    expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object), 'option1');
  });

  it('applies the selected styles to the selected button', () => {
    render(<ToggleGroup value="option1" onChange={onChangeMock} options={options} />);
    
    const selectedButton = screen.getByLabelText('Option 1');
    expect(selectedButton).toHaveClass('Mui-selected');
  });
});
