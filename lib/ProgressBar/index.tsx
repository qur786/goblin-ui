import type { CSSProperties, HTMLAttributes } from "react";

interface ProgressBarProps {
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
          width: (
            (value >= 0 ? (value > max ? max : value) : 0) /
            (max >= 0 ? max : 0)
          ).toLocaleString(undefined, {
            style: "percent",
          }),
          ...progressBarStyle,
        }}
      ></div>
    </div>
  );
}
