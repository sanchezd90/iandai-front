import React from 'react';
import { styled } from '@mui/material/styles';
import { SvgIconProps } from '@mui/material/SvgIcon';
import {Box, Card as MuiCard, Typography} from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';

interface CardProps {
    label?: string;
    icon?: React.ComponentType<SvgIconProps>;
}

const StyledCard = styled(MuiCard)(({  }) => ({
    borderRadius: '10px',
    width: '100%',
    maxWidth: '240px',
    height: '240px',
}));

const IconContainer = styled(Box)(({ }) => ({
    backgroundColor: '#f5f5f5',
    minHeight: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    fontSize: '60px',
}));

const StyledCardActionArea = styled(CardActionArea)(({  }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
}));


const Card: React.FC<CardProps> = ({ label, icon: Icon}) => {
    return (
      <StyledCard data-testid="card">
        <StyledCardActionArea>
          <IconContainer data-testid="icon-container">{Icon && <Icon data-testid="icon" fontSize="inherit"/>}</IconContainer>          
            <Typography variant="h5" component="div" sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {label}
            </Typography>         
        </StyledCardActionArea>
      </StyledCard>
    );
};

export default Card;
