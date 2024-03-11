import { ProgressBar } from "../../lib/ProgressBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProgressBar> = {
  title: "ProgressBar",
  component: ProgressBar,
  args: {
    max: 100,
    value: 50,
  },
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100 },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {};
