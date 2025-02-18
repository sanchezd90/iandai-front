import { render, screen, fireEvent } from '@testing-library/react';
import PillComponent from './Pill';
import theme from '../../../app/theme';

describe('TabComponent', () => {
  test('renders label and icon', () => {
    render(<PillComponent label="All" isActive={false} onClick={() => {}}/>);
    expect(screen.getByText('All')).toBeInTheDocument();    
  });

  test('applies active styles when isActive is true', () => {
    render(<PillComponent label="Active" isActive={true} onClick={() => {}} />);
    const pillElement = screen.getByText('Active');
    expect(pillElement).toHaveStyle(`border: none`);
  });

  test('applies inactive styles when isActive is false', () => {
    render(<PillComponent label="Inactive" isActive={false} onClick={() => {}} />);
    const pillElement = screen.getByText('Inactive');
    expect(pillElement).toHaveStyle(`border: 1px solid ${theme.palette.divider}`);
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<PillComponent label="Click Me" isActive={false} onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
