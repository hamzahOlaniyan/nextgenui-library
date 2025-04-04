import { cva } from "class-variance-authority";

export const buttonStyle = cva(
  [
    "w-full",
    "active:scale-95",
    "duration-300",
    "rounded-[3.5px]",
    "focus:outline-none font-light",
    "disables:cursor-not-allowed duration-200",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        solid: [""],
        outline: ["border-1"],
        ghost: ["transition-colors"],
        plain: ["bg-transparent"],
      },
      size: {
        xs: ["text-xs py-1 px-1.5 font-light"],
        sm: ["text-sm py-1.5 px-1.5 font-normal"],
        md: ["text-base py-2 px-2.5 font-medium"],
        lg: ["text-lg py-2.5 px-3 font-semibold"],
      },
      colorScheme: {
        primary: "text-white",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "primary",
        className: "bg-sky-950 hover:bg-sky-900",
      },
      {
        variant: "outline",
        className: "text-sky-950 border-sky-950 bg-transparent hover:bg-sky-50",
      },
      {
        variant: "ghost",
        className: "text-sky-950 hover:bg-sky-50",
      },
      {
        variant: "plain",
        className: "text-sky-950",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorScheme: "primary",
    },
  }
);
