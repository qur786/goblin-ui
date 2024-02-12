import { Button } from "../../lib/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Button/Outlined",
  component: Button,
  args: {
    title: "Button",
    variant: "outlined",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    background: "secondary",
  },
};
