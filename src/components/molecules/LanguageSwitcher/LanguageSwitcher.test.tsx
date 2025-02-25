import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LanguageSwitcher from './LanguageSwitcher';
import userEvent from '@testing-library/user-event';

describe('LanguageSwitcher', () => {
  it('renders correctly', () => {
    render(<LanguageSwitcher />);
    expect(screen.getByText('English')).toBeInTheDocument();
  });

  it('changes language when a different option is selected', async () => {
    render(<LanguageSwitcher />);
    const user = userEvent.setup();
    
    const button = screen.getByRole('button', { name: 'English' });
    await user.click(button);
    
    const spanishOption = screen.getByText('Español');
    await user.click(spanishOption);
    
    expect(screen.getByRole('button', { name: 'Español' })).toBeInTheDocument();
  });
});  