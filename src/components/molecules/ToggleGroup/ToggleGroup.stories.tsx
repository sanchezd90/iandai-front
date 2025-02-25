import type { Meta, StoryObj } from '@storybook/react';

import ToggleGroup from './ToggleGroup';

const meta = {
  component: ToggleGroup,
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'left',
    onChange: () => {},
    options: [
      { value: 'left', label: 'Left' },
      { value: 'center', label: 'Center' },
      { value: 'right', label: 'Right' },
    ]
  }
};