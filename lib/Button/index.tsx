import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

/**
 * Inteface for the Button component.
 */
export interface ButtonProps extends ComponentProps<"button"> {
  /**
   * The text to display on the button.
   */
  title?: string;
  /**
   * The overall look of the button.
   */
  variant?: "contained" | "outlined" | "text";
  /**
   * The color of the button.
   */
  background?: "primary" | "secondary";
}

/**
 * Represents a button component.
 * @remarks
 * This component renders a button with customizable text and click handler.
 * @public
 */
export function Button({
  title,
  variant = "contained",
  background = "primary",
  children,
  className,
  ...rest
}: ButtonProps): JSX.Element {
  const variantClass = {
    root: "gb-rounded-md",
    contained: {
      root: "",
      primary: "gb-bg-primary",
      secondary: "gb-bg-secondary",
    },
    outlined: {
      root: "gb-border gb-border-gray-300",
      primary: "gb-text-primary",
      secondary: "gb-text-secondary",
    },
    text: {
      root: "",
      primary: "gb-text-primary",
      secondary: "gb-text-secondary",
    },
  };

  return (
    <button
      className={twMerge(
        `gb-text-white dark:gb-text-black dark:gb-bg-white gb-py-2 gb-px-4 ${variantClass.root} ${variantClass[variant].root} ${variantClass[variant][background]}`,
        className,
      )}
      {...rest}
    >
      {/* TODO: remove title */}
      {children ?? title}
    </button>
  );
}
