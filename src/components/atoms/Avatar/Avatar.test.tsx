import React from 'react';
import { render } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar Component', () => {
    it('renders with default props', () => {
        const { getByText } = render(<Avatar initials="AB" />);
        const avatarElement = getByText('AB');
        expect(avatarElement).toBeInTheDocument();
        expect(avatarElement).toHaveStyle('width: 40px');
        expect(avatarElement).toHaveStyle('height: 40px');
        expect(avatarElement).toHaveStyle('background-color: #3f51b5');
        expect(avatarElement).toHaveStyle('color: #fff');
    });

    it('renders with custom size', () => {
        const { getByText } = render(<Avatar initials="CD" size={60} />);
        const avatarElement = getByText('CD');
        expect(avatarElement).toHaveStyle('width: 60px');
        expect(avatarElement).toHaveStyle('height: 60px');
        expect(avatarElement).toHaveStyle('font-size: 30px');
    });

    it('renders with custom colors', () => {
        const { getByText } = render(<Avatar initials="EF" backgroundColor="#ff5722" textColor="#000" />);
        const avatarElement = getByText('EF');
        expect(avatarElement).toHaveStyle('background-color: #ff5722');
        expect(avatarElement).toHaveStyle('color: #000');
    });
});
