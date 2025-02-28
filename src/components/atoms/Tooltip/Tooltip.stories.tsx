import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@mui/material';

import Tooltip from './Tooltip';

const meta = {
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "This is a text",
    children: <Typography display="inline">Something to be explained</Typography>
  }
};