import { Notification } from "../../lib/Notification";
import {
  NotificationPosition,
  NotificationVariant,
  type NotificationArgs,
} from "../../lib/Notification";
import {
  GoblinProvider,
  useGoblin,
} from "../../lib/GoblinProvider/theme-context";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Button } from "../../lib/Button";

type NotificationCustomProps = ComponentProps<typeof Notification> &
  NotificationArgs;

const meta: Meta<NotificationCustomProps> = {
  title: "Notification",
  component: Notification,
  args: {
    title: "Sample notification.",
  },
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
        })}
      >
        Trigger Notification
      </Button>
    );
  },
};
