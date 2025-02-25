import type { Meta, StoryObj } from '@storybook/react';

import Chips from './Chips';

const meta = {
  component: Chips,
} satisfies Meta<typeof Chips>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: 'label1', value: 'label1' },
      { label: 'label2', value: 'label2' },
      { label: 'label3', value: 'label3' },
      { label: 'label4', value: 'label4' },
      { label: 'label5', value: 'label5' },
      { label: 'label6', value: 'label6' },
      { label: 'label7', value: 'label7' },
      { label: 'label8', value: 'label8' },
      { label: 'label9', value: 'label9' },
      { label: 'label10', value: 'label10' },
    ],
    onClick: () => {},
    selectedValue: "label4"
  }
};