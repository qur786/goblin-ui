import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface PaginationButtonProps extends ComponentProps<"button"> {
  /**
   * Indicates if the pagination button is active or not.
   */
  active: boolean;
}

/**
 * Button used in Pagination component
 */
export function PaginationButton({
  active,
  ...props
}: PaginationButtonProps): JSX.Element {
  return (
    <button
      {...props}
      className={twMerge(
        "gb-rounded-full",
        props.className,
        "gb-border-2 gb-size-10",
        active ? "gb-bg-green-100 gb-text-green-900 gb-border-green-300" : "",
      )}
    />
  );
}
