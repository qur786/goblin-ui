import type { CSSProperties, HTMLAttributes } from "react";

export interface ProgressBarProps {
  value: number; // Non-negative value
  max: number; // Non negative value
  width?: string;
  height?: string;
  progressContainerColor?: string;
  progressBarColor?: string;
  progressContainerStyle?: CSSProperties;
  progressContainerClassName?: HTMLAttributes<HTMLDivElement>["className"];
  progressBarStyle?: CSSProperties;
  progressBarClassName?: HTMLAttributes<HTMLDivElement>["className"];
}

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
