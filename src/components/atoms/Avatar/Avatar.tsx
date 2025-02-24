import React from 'react';
import { styled } from '@mui/material/styles';
import theme from '../../../app/theme';
interface AvatarProps {
    initials?: string;
    size?: number;
    backgroundColor?: string;
    textColor?: string;
}

const StyledAvatar = styled('div')<AvatarProps>(({ size, backgroundColor, textColor }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    width: size || 80,
    height: size || 80,
    backgroundColor: backgroundColor || theme.palette.common.black,
    color: textColor || theme.palette.common.white,
    fontSize: size ? size / 2 : 20,
    textTransform: 'uppercase',
}));

const Avatar: React.FC<AvatarProps> = ({ initials, size, backgroundColor, textColor }) => {
    const displayInitials = initials ? initials.slice(0, 2) : 'ME';
    return (
        <StyledAvatar size={size} backgroundColor={backgroundColor} textColor={textColor}>
            {displayInitials}
        </StyledAvatar>
    );
};

export default Avatar;
