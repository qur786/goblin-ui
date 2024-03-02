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
      <div style={{ height: "200vh" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          Scroll down
        </h2>
        <ScrollIndicator />
      </div>
    );
  },
};
