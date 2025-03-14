import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  title: "components/Button",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const solid: Story = {
  args: {
    children: "Click me (xs)",
    variant: "solid",
  },
};
export const outline: Story = {
  args: {
    children: "Click me (sm)",
    variant: "outline",
  },
};
export const ghost: Story = {
  args: {
    children: "Click me (md)",
    variant: "ghost",
  },
};
export const plain: Story = {
  args: {
    children: "Click me (lg)",
    variant: "plain",
  },
};
