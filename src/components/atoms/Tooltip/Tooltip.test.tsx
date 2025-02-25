import React from 'react';
import { render, screen } from '@testing-library/react';
import Tooltip from './Tooltip';

describe('Tooltip Component', () => {
    it('renders the children correctly', () => {
        render(
            <Tooltip title="Test Tooltip">
                <button>Hover me</button>
            </Tooltip>
        );
        expect(screen.getByText('Hover me')).toBeInTheDocument();
    });

    it('displays the tooltip on hover', async () => {
        render(
            <Tooltip title="Test Tooltip">
                <button>Hover me</button>
            </Tooltip>
        );

        // Simulate hover
        const button = screen.getByText('Hover me');
        button.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));

        // Check if the tooltip is displayed
        expect(await screen.findByText('Test Tooltip')).toBeInTheDocument();
    });
});
