import { useState } from "react";
import { Modal, ModalAnimation } from "../../lib/Modal";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../lib/Button";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  args: {
    fullScreen: false,
  },
  argTypes: {
    animation: {
      options: Object.values(ModalAnimation),
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: function Component(args) {
    const [open, setOpen] = useState(false);

    const toggleModal = () => {
      setOpen((prev) => !prev);
    };

    const handleModalClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <Button onClick={toggleModal}>{open ? "Close" : "Open"}</Button>
        <Modal {...args} open={open} onClose={handleModalClose}>
          <div className="gb-w-60">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              dolore beatae soluta neque fugiat amet explicabo nobis eaque, est
              officiis labore tempora ipsum porro omnis maiores quos quis
              aspernatur quae! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Odio dolore beatae soluta neque fugiat amet
              explicabo nobis eaque, est officiis labore tempora ipsum porro
              omnis maiores quos quis aspernatur quae! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Odio dolore beatae soluta neque
              fugiat amet explicabo nobis eaque, est officiis labore tempora
              ipsum porro omnis maiores quos quis aspernatur quae!
            </p>
          </div>
        </Modal>
      </div>
    );
  },
};
