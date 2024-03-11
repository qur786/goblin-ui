import {
  NotificationPosition,
  NotificationVariant,
  type NotificationProps,
} from "../../lib/Notification";
import {
  GoblinProvider,
  useGoblin,
} from "../../lib/GoblinProvider/theme-context";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Button } from "../../lib/Button";

type NotificationCustomProps = ComponentProps<typeof GoblinProvider> &
  NotificationProps;

const meta: Meta<NotificationCustomProps> = {
  title: "GoblinProvider",
  component: GoblinProvider,
  argTypes: {
    title: {
      type: "string",
      defaultValue: "Sample Notification",
    },
    timeout: {
      type: "number",
      defaultValue: 3000,
    },
    position: {
      options: Object.values(NotificationPosition),
      control: { type: "radio" },
    },
    variant: {
      options: Object.values(NotificationVariant),
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<NotificationCustomProps>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <GoblinProvider>
        <Story />
      </GoblinProvider>
    ),
  ],
  render: function Component(args) {
    const { triggerNotification } = useGoblin();
    return (
      <Button
        onClick={triggerNotification.bind(null, {
          ...args,
          title: "Notification sample",
        })}
      >
        Trigger Notification
      </Button>
    );
  },
};
