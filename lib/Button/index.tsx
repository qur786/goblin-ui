import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const ButtonVariant = {
  Contained: "contained",
  Outlined: "outlined",
  Text: "text",
} as const;

export const ButtonColor = {
  Primary: "primary",
  Secondary: "secondary",
} as const;

export type ButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

export type ButtonColor = (typeof ButtonColor)[keyof typeof ButtonColor];

export interface ButtonProps extends ComponentProps<"button"> {
  /**
   * The overall look of the button.
   */
  variant?: ButtonVariant;
  /**
   * The color of the button.
   */
  color?: ButtonColor;
}

/**
 * Represents a button component.
 * @remarks
 * This component renders a button with customizable text and click handler.
 */
export function Button({
  variant = "contained",
  color = "primary",
  children,
  className,
  ...rest
}: ButtonProps): JSX.Element {
  const variantClass = {
    root: "gb-rounded-md",
    contained: {
      root: "dark:gb-text-black gb-text-white ",
      primary: "gb-bg-primary",
      secondary: "gb-bg-secondary",
    },
    outlined: {
      root: "gb-border gb-bg-transparent",
      primary: "gb-text-primary gb-border-primary",
      secondary: "gb-text-secondary gb-border-secondary",
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
        "gb-py-2 gb-px-4",
        className,
        variantClass.root,
        variantClass[variant].root,
        variantClass[variant][color],
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
