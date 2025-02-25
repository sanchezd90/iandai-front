import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from './Tooltip';

const meta = {
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "title",
    children: <div style={{ width: '100px', backgroundColor: 'gray' }}>Something good</div>
  }
};