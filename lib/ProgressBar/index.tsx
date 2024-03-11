import type { CSSProperties, HTMLAttributes } from "react";

export interface ProgressBarProps {
  /**
   * Progress number. It should be a non-negative number.
   */
  value: number;
  /**
   * Max number. It should be a non-negative number too.
   */
  max: number;
  /**
   * Width of the progress bar.
   * @default 100%
   */
  width?: string;
  /**
   * Height of the progress bar.
   * @default 5px
   */
  height?: string;
  /**
   * Color of the progress container i.e. the color that empty space will take.
   * @default #EEEEEE
   */
  progressContainerColor?: string;
  /**
   * Color of the progress bar i.e the color of the bar.
   * @default #FA541C
   */
  progressBarColor?: string;
  /**
   * CSS properties that we can pass onto style prop of progress bar container.
   */
  progressContainerStyle?: CSSProperties;
  /**
   * class name for the container.
   */
  progressContainerClassName?: HTMLAttributes<HTMLDivElement>["className"];
  /**
   * CSS properties that we can pass onto style prop of progress bar.
   */
  progressBarStyle?: CSSProperties;
  /**
   * class name for the container.
   */
  progressBarClassName?: HTMLAttributes<HTMLDivElement>["className"];
}

/**
 * Represents a progress bar.
 * @remarks
 * This component can be used as a custom progress bar and developer can provide custom style to it.
 */
export function ProgressBar({
  value,
  max,
  progressContainerColor = "#EEEEEE",
  progressBarColor = "#FA541C",
  width = "100%",
  height = "5px",
  progressContainerStyle = {},
  progressContainerClassName,
  progressBarStyle = {},
  progressBarClassName,
}: ProgressBarProps): JSX.Element {
  const computedProgress = value / max;
  const progressWidth =
    Number.isFinite(computedProgress) && computedProgress > 0
      ? computedProgress.toLocaleString(undefined, {
          style: "percent",
        })
      : "0%";
  return (
    <div
      style={{
        backgroundColor: progressContainerColor,
        width,
        height,
        ...progressContainerStyle,
      }}
      className={progressContainerClassName}
    >
      <div
        className={progressBarClassName}
        style={{
          height: "100%",
          backgroundColor: progressBarColor,
          borderRadius: "50px",
          width: progressWidth,
          ...progressBarStyle,
        }}
      ></div>
    </div>
  );
}
