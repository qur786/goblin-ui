import { ProgressBar, ProgressBarProps } from "../ProgressBar";
import { useEffect, useState } from "react";

interface ScrollIndicatorProps {
  /**
   * Style to be applied to scroll bar container i.e. empty space. Background color is made transparent.
   */
  style?: ProgressBarProps["progressContainerStyle"];
  /**
   * Color of the scroll bar.
   * @default #FA541C
   */
  color?: ProgressBarProps["progressBarColor"];
}

export function ScrollIndicator({
  style = {},
  color,
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
      progressContainerStyle={{ backgroundColor: "transparent", ...style }}
      progressBarColor={color}
    />
  );
}
