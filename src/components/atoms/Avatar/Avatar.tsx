import React from 'react';
import { styled } from '@mui/material/styles';

interface AvatarProps {
    initials: string;
    size?: number;
    backgroundColor?: string;
    textColor?: string;
}

const StyledAvatar = styled('div')<AvatarProps>(({ size, backgroundColor, textColor }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    width: size || 40,
    height: size || 40,
    backgroundColor: backgroundColor || '#3f51b5',
    color: textColor || '#fff',
    fontSize: size ? size / 2 : 20,
}));

const Avatar: React.FC<AvatarProps> = ({ initials, size, backgroundColor, textColor }) => {
    return (
        <StyledAvatar size={size} backgroundColor={backgroundColor} textColor={textColor}>
            {initials}
        </StyledAvatar>
    );
};

export default Avatar;
