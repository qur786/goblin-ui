import { ScrollIndicator } from "../../lib/ScrollIndicator";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ScrollIndicator> = {
  title: "ScrollIndicator",
  component: ScrollIndicator,
};

export default meta;

type Story = StoryObj<typeof ScrollIndicator>;

export const Default: Story = {
  render: () => {
    return (
      <div className="gb-h-[200vh]">
        <h2 className="tb-text-center gb-text-2xl gb-font-semibold">
          Scroll down. The height of this screen has been increased to allow
          scrolling
        </h2>
        <ScrollIndicator />
      </div>
    );
  },
};
