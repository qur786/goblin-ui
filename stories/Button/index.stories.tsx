import { Button, ButtonColor, ButtonVariant } from "../../lib/Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    title: "Button",
  },
  argTypes: {
    title: {
      type: "string",
    },
    variant: {
      options: Object.values(ButtonVariant),
      control: { type: "radio" },
    },
    color: {
      options: Object.values(ButtonColor),
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
