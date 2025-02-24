import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import theme from '../../../app/theme';

interface MessageBoxProps {
  message: string;
  sender: 'user' | 'system';
}

const StyledMessageBox = styled(Paper)<{ sender: 'user' | 'system' }>(({ sender }) => ({
  padding: 16,   
  backgroundColor: sender === 'user' ? theme.palette.secondary.dark : theme.palette.primary.light,
  color: theme.palette.common.black,
  boxShadow: 'none',
  borderRadius: 12,
  fontSize: 16,  
  lineHeight: 1.5,
  letterSpacing: 0.15,
  textAlign: 'left',
}));

const MessageBox: React.FC<MessageBoxProps> = ({ message, sender }) => {
  return <StyledMessageBox data-testid="message-box" sender={sender}>{message}</StyledMessageBox>;
};

export default MessageBox;
