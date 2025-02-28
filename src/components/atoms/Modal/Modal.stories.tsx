import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';

const meta = {
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    title: "title",
    description: "description",
    onClose: () => {},
    onConfirm: () => {},
  }
};