import { useState } from "react";
import { Pagination } from "../../lib/Pagination";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Pagination> = {
  title: "Pagination",
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: function Component(args) {
    const [currentPage, setCurrentPage] = useState(1);
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        pageLength={100}
        setCurrentPage={setCurrentPage}
      />
    );
  },
};
