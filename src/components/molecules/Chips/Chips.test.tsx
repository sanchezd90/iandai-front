import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Chips from './Chips';

describe('Chips Component', () => {
  const labels = ['Chip1', 'Chip2', 'Chip3'];
  const onClickMock = jest.fn();
  const selectedLabel = 'Chip2';

  it('renders all chips', () => {
    render(<Chips labels={labels} onClick={onClickMock} selectedLabel={selectedLabel} />);
    
    labels.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('applies selected style to the selected chip', () => {
    render(<Chips labels={labels} onClick={onClickMock} selectedLabel={selectedLabel} />);
    
    const selectedChipLabelElement = screen.getByText(selectedLabel);
    const selectedChip = selectedChipLabelElement.parentElement;
    expect(selectedChip).toHaveClass('MuiChip-filled');    
  });

  it('calls onClick with the correct label when a chip is clicked', () => {
    render(<Chips labels={labels} onClick={onClickMock} selectedLabel={selectedLabel} />);
    
    const chipToClick = screen.getByText('Chip1');
    fireEvent.click(chipToClick);
    
    expect(onClickMock).toHaveBeenCalledWith('Chip1');
  });
});
