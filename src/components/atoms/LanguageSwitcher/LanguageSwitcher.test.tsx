import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageSwitcher from './LanguageSwitcher';

describe('LanguageSwitcher', () => {
  it('renders correctly', () => {
    render(<LanguageSwitcher />);
    expect(screen.getByText('Switch to Spanish')).toBeInTheDocument();
  });
})