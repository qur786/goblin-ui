import { ProgressBar, ProgressBarProps } from "../ProgressBar";
import { useEffect, useState } from "react";

export interface ScrollIndicatorProps {
  /**
   * Color of the scroll bar.
   * @default #FA541C
   */
  color?: ProgressBarProps["progressBarColor"];
  /**
   * Height of the scroll indicator.
   * @default 5px
   */
  height?: string;
}

export function ScrollIndicator({
  color,
  height,
}: ScrollIndicatorProps): JSX.Element {
  const [yPosition, setYPosition] = useState(() => {
    return window.scrollY;
  });

  useEffect(() => {
    const scrollEventListener = () => {
      setYPosition(window.scrollY);
    };

    window.addEventListener("scroll", scrollEventListener);

    return () => {
      window.removeEventListener("scroll", scrollEventListener);
    };
  }, []);
  return (
    <ProgressBar
      value={yPosition}
      max={
        window.document.documentElement.scrollHeight -
        window.document.documentElement.clientHeight
      }
      progressContainerClassName="gb-h-full gb-fixed gb-top-0 gb-left-0"
      progressContainerStyle={{ backgroundColor: "transparent" }}
      progressBarColor={color}
      height={height}
    />
  );
}
