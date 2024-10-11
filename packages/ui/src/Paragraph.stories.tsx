import { Meta, StoryObj } from "@storybook/react";

import { Paragraph } from "./Paragraph";

const meta = {
  component: Paragraph,
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Hello, world!",
  },
};
