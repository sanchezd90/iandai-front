import React from 'react';
import { styled } from '@mui/material/styles';
import MuiCard from '@mui/material/Card';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface CardProps {
    children?: React.ReactNode;
    icon?: React.ComponentType<SvgIconProps>;
}

const StyledCard = styled(MuiCard)(({ theme }) => ({
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    overflow: 'hidden',
    position: 'relative',
}));

const IconContainer = styled('div')(({ }) => ({
    backgroundColor: '#f5f5f5',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const CardContent = styled('div')(({ theme }) => ({
    padding: theme.spacing(2),
}));

const Card: React.FC<CardProps> = ({ children, icon: Icon, ...props }) => {
    return (
        <StyledCard {...props} data-testid="card">
            <IconContainer>
                {Icon && <Icon data-testid="icon"/>}
            </IconContainer>
            <CardContent>                
                {children}
            </CardContent>
        </StyledCard>
    );
};

export default Card;
