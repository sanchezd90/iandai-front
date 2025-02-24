import type { Meta, StoryObj } from '@storybook/react';

import { CustomMenu } from './Menu';

const meta = {
  component: CustomMenu,
} satisfies Meta<typeof CustomMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    anchorEl: document.getElementById('menu-anchor'),
    options: ['Option 1', 'Option 2', 'Option 3'],
    handleSelect: () => {},
    handleClose: () => {}
  }
};

const anchorElement = document.createElement('div');
anchorElement.id = 'menu-anchor';
document.body.appendChild(anchorElement);