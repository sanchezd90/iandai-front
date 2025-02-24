import type { Meta, StoryObj } from '@storybook/react';

import DialogBox from './DialogBox';

const meta = {
  component: DialogBox,
} satisfies Meta<typeof DialogBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "message",
    sender: "user"
  }
};