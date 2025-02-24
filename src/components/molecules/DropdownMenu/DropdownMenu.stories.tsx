import type { Meta, StoryObj } from '@storybook/react';

import DropdownMenu from './DropdownMenu';

const meta = {
  component: DropdownMenu,
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    onSelect: () => {},
    buttonLabel: "buttonLabel"
  }
};