import React from 'react';
import Image from 'next/image';
import LogoWords from '/public/logo-words.svg';
import LogoSolid from '/public/logo-solid.svg';

interface LogoProps {        
    variant?: 'words' | 'solid';
}

const Logo: React.FC<LogoProps> = ({ variant = 'words' }) => {
    return (
        <Image src={variant === 'words' ? LogoWords : LogoSolid} alt={`IANDAI ${variant} logo`} />
    );
};

export default Logo;
