import { useEffect, useState } from "react";
import { ProgressBar } from "../../lib/ProgressBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProgressBar> = {
  title: "ProgressBar",
  component: ProgressBar,
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  render: function Component(args) {
    const [value, setValue] = useState(0);

    useEffect(() => {
      const intervalID = setInterval(() => {
        setValue((prev) => {
          if (prev > 100) {
            clearInterval(intervalID);
            return 100;
          }
          return prev + 10;
        });
      }, 500);
    }, []);
    return <ProgressBar {...args} max={100} value={value} />;
  },
};
