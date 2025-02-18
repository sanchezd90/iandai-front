import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
    it('renders children correctly', () => {
        const { getByText } = render(
            <Card>
                <div>Test Child</div>
            </Card>
        );
        expect(getByText('Test Child')).toBeInTheDocument();
    });    
});
