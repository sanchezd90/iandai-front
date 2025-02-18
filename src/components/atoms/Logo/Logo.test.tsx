import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from './Logo';

describe('Logo Component', () => {
    it('renders an image with the correct src and alt attributes', () => {
        const { getByAltText } = render(<Logo src="/logo.svg" alt="Company Logo" />);
        const image = getByAltText('Company Logo');
        
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/logo.svg');
    });

    it('applies default width and height if not provided', () => {
        const { getByAltText } = render(<Logo src="/logo.svg" alt="Company Logo" />);
        const image = getByAltText('Company Logo');
        
        expect(image).toHaveAttribute('width', '50');
        expect(image).toHaveAttribute('height', '50');
    });

    it('applies custom width and height when provided', () => {
        const { getByAltText } = render(<Logo src="/logo.svg" alt="Company Logo" width={100} height={100} />);
        const image = getByAltText('Company Logo');
        
        expect(image).toHaveAttribute('width', '100');
        expect(image).toHaveAttribute('height', '100');
    });
});
