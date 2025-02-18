import React from 'react';
import { styled } from '@mui/material/styles';
import MuiCard from '@mui/material/Card';

interface CardProps {
    children: React.ReactNode;    
}

const StyledCard = styled(MuiCard)(({ theme }) => ({
    padding: theme.spacing(2),
    margin: theme.spacing(1),    
}));

const Card: React.FC<CardProps> = ({ children, ...props }) => {
    return (
        <StyledCard {...props}>
            {children}
        </StyledCard>
    );
};

export default Card;
