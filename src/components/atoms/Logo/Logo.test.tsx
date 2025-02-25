import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from './Logo';

describe('Logo Component', () => {    
    it('renders the words variant by default', () => {
        const { getByAltText } = render(<Logo />);
        const image = getByAltText('IANDAI words logo');        
        expect(image).toBeInTheDocument();       
    });

    it('renders the solid variant when specified', () => {
        const { getByAltText } = render(<Logo variant="solid" />);
        const image = getByAltText('IANDAI solid logo');        
        expect(image).toBeInTheDocument();        
    });
});
