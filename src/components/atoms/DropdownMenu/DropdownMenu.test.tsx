import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropdownMenu from './DropdownMenu';

describe('DropdownMenu Component', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const buttonLabel = 'Open Menu';
    const onSelectMock = jest.fn();

    beforeEach(() => {
        render(<DropdownMenu options={options} onSelect={onSelectMock} buttonLabel={buttonLabel} />);
    });

    it('renders the button with the correct label', () => {
        expect(screen.getByText(buttonLabel)).toBeInTheDocument();
    });

    it('opens the menu when the button is clicked', () => {
        fireEvent.click(screen.getByText(buttonLabel));
        options.forEach(option => {
            expect(screen.getByText(option)).toBeInTheDocument();
        });
    });

    it('calls onSelect with the correct option when a menu item is clicked', () => {
        fireEvent.click(screen.getByText(buttonLabel));
        fireEvent.click(screen.getByText('Option 1'));
        expect(onSelectMock).toHaveBeenCalledWith('Option 1');
    });

    it('closes the menu after an option is selected', async () => {
        fireEvent.click(screen.getByText(buttonLabel));
        fireEvent.click(screen.getByText('Option 1'));
        await waitFor(() => {
            options.forEach(option => {
                expect(screen.queryByText(option)).not.toBeInTheDocument();
            });
        });
    });
});
