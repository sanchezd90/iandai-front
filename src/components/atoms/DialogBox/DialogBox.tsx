import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

interface MessageBoxProps {
  message: string;
  sender: 'user' | 'other';
}

const StyledMessageBox = styled(Paper)<{ sender: 'user' | 'other' }>(({ theme, sender }) => ({
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  maxWidth: '60%',
  alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
  backgroundColor: sender === 'user' ? theme.palette.primary.main : theme.palette.grey[300],
  color: sender === 'user' ? theme.palette.primary.contrastText : theme.palette.text.primary,
}));

const MessageBox: React.FC<MessageBoxProps> = ({ message, sender }) => {
  return <StyledMessageBox sender={sender}>{message}</StyledMessageBox>;
};

export default MessageBox;
