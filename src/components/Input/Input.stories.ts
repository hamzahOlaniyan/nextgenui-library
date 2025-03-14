import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const text: Story = {
  args: {
    type: "text",
    placeholder: "Enter your name",
  },
};

export const password: Story = {
  args: {
    type: "password",
    placeholder: "Enter your name",
  },
};

export const number: Story = {
  args: {
    type: "number",
    placeholder: "Enter your name",
  },
};

export const date: Story = {
  args: {
    type: "date",
    placeholder: "Enter your name",
  },
};

export const underline: Story = {
  args: {
    variant: "underline",
    placeholder: "underline",
  },
};

export const def: Story = {
  args: {
    variant: "default",
    placeholder: "default",
    label: "Email",
  },
};
export const plain: Story = {
  args: {
    variant: "plain",
    placeholder: "plain",
  },
};
