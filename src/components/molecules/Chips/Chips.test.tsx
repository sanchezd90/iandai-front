import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Chips from './Chips';

describe('Chips Component', () => {
  const options = [
    { label: 'Chip1', value: 'chip1' },
    { label: 'Chip2', value: 'chip2' },
    { label: 'Chip3', value: 'chip3' },
  ];
  const onClickMock = jest.fn();
  const selectedValue = 'chip2';

  it('renders all chips', () => {
    render(<Chips options={options} onClick={onClickMock} selectedValue={selectedValue} />);
    
    options.forEach(option => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('applies selected style to the selected chip', () => {
    render(<Chips options={options} onClick={onClickMock} selectedValue={selectedValue} />);
    const selectedOption = options.find(option => option.value === selectedValue);
    const selectedChipLabelElement = screen.getByText(selectedOption?.label || '');
    const selectedChip = selectedChipLabelElement.parentElement;
    expect(selectedChip).toHaveClass('MuiChip-filled');    
  });

  it('calls onClick with the correct label when a chip is clicked', () => {
    render(<Chips options={options} onClick={onClickMock} selectedValue={selectedValue} />);
    
    const chipToClick = screen.getByText(options[0].label);
    fireEvent.click(chipToClick);
    
    expect(onClickMock).toHaveBeenCalledWith(options[0].value);
  });
});
