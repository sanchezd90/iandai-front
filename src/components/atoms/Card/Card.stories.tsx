import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import HomeIcon from '@mui/icons-material/Home';

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'This is a card',
    icon: HomeIcon, 
  },
};