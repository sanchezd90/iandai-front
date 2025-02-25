import type { Meta, StoryObj } from '@storybook/react';

import Select from './Select';

const meta = {
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Select an option',
    options: [{ value: 'option1', label: 'Option 1' }, { value: 'option2', label: 'Option 2' }],
    value: 'option1',
    onChange: () => {},
  },
};