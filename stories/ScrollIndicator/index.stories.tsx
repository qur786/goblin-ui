import { ScrollIndicator } from "../../lib/ScrollIndicator";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ScrollIndicator> = {
  title: "ScrollIndicator",
  component: ScrollIndicator,
  args: {
    color: "#FA541C",
    height: "5px",
  },
  argTypes: {
    color: {
      control: { type: "color" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ScrollIndicator>;

export const Default: Story = {
  render: (args) => {
    return (
      <div style={{ height: "200vh" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            color: args.color,
          }}
        >
          Scroll down. The height of this screen has been increased to allow
          scrolling
        </h2>
        <ScrollIndicator {...args} />
      </div>
    );
  },
};
