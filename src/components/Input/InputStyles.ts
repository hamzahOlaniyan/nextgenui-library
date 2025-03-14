import { cva } from "class-variance-authority";

export const inputStyle = cva(
  [
    "w-full p-1.5 rounded-sm font-light placeholder:text-neutral-400 placeholder:font-light border-0 outline-0 focus:outline-2 focus:border-0 focus:outline-neutral-900",
  ],
  {
    variants: {
      variant: {
        default: [""],
        underline: [""],
        plain: [""],
      },
    },
    compoundVariants: [
      {
        variant: "default",
        className: "border-1 border-[#80868b] bg-[#fafafa]",
      },
      {
        variant: "underline",
        className:
          "border-b border-[#80868b] py-1 rounded-none focus:outline-0 focus:border-b-2 focus:border-neutral-900",
      },
      {
        variant: "plain",
        className: "border-[#80868b] bg-[#fafafa]",
      },
    ],
    defaultVariants: {
      variant: "default",
    },
  }
);
