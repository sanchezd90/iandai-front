import type { Meta, StoryObj } from '@storybook/react';

import Chips from './Chips';

const meta = {
  component: Chips,
} satisfies Meta<typeof Chips>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labels: ['label1', 'label2', 'label3', 'label4', 'label5', 'label6', 'label7', 'label8', 'label9', 'label10'],
    onClick: () => {},
    selectedLabel: "label2"
  }
};