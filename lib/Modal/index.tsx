import { twMerge } from "tailwind-merge";
import { Button } from "../Button";
import type { CSSProperties, PropsWithChildren } from "react";

export const ModalAnimation = {
  FromTop: "from-top",
  FromRight: "from-right",
  FromLeft: "from-left",
  FromBottom: "from-bottom",
} as const;

type ModalAnimation = (typeof ModalAnimation)[keyof typeof ModalAnimation];

function animateModal({
  height,
  width,
  fullScreen,
  animation,
  open,
}: {
  height: number;
  width: number;
  fullScreen: boolean;
  animation: ModalAnimation;
  open: boolean;
}) {
  let output: CSSProperties = {};
  const leftOnBottomAndTopAnimation = fullScreen
    ? 0
    : `calc(50vw - ${width / 2}px)`;
  const leftAndRightAnimation = open
    ? fullScreen
      ? 0
      : `calc(50vw - ${width / 2}px)`
    : -2000;
  const topOnLeftAndRightAnimation = fullScreen
    ? 0
    : `calc(50vh - ${height / 2}px)`;
  const topAndBottomAnimation = open
    ? fullScreen
      ? 0
      : `calc(50vh - ${height / 2}px)`
    : -2000;

  switch (animation) {
    case ModalAnimation.FromBottom:
      output = {
        bottom: topAndBottomAnimation,
        left: leftOnBottomAndTopAnimation,
        transitionProperty: "bottom",
      };
      break;
    case ModalAnimation.FromRight:
      output = {
        top: topOnLeftAndRightAnimation,
        right: leftAndRightAnimation,
        transitionProperty: "right",
      };
      break;
    case ModalAnimation.FromLeft:
      output = {
        top: topOnLeftAndRightAnimation,
        left: leftAndRightAnimation,
        transitionProperty: "left",
      };
      break;
    case ModalAnimation.FromTop:
    default:
      output = {
        top: topAndBottomAnimation,
        left: leftOnBottomAndTopAnimation,
        transitionProperty: "top",
      };
  }

  return output;
}

export interface ModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  fullScreen?: boolean;
  height?: number;
  width?: number;
  animation?: ModalAnimation;
}

export function Modal({
  children,
  open,
  fullScreen,
  onClose,
  height = 380,
  width = 380,
  animation = ModalAnimation.FromTop,
}: ModalProps): JSX.Element {
  return (
    <>
      <div
        style={{
          height: fullScreen ? "100vh" : height,
          width: fullScreen ? "100vw" : width,
          ...animateModal({
            height,
            width,
            fullScreen: fullScreen ?? false,
            animation,
            open,
          }),
        }}
        className={"gb-z-10 gb-fixed gb-duration-1000"}
      >
        <div
          className={twMerge(
            "gb-flex gb-flex-col gb-justify-between gb-h-full gb-w-full gb-p-6 gb-box-border gb-shadow-md gb-bg-white dark:gb-text-white dark:gb-bg-[#1E1E1E]",
            fullScreen ? "" : "gb-rounded-md",
          )}
        >
          <div className="gb-overflow-auto">{children}</div>
          <Button className="gb-self-end" onClick={onClose} variant="text">
            Close
          </Button>
        </div>
      </div>
      <div
        id="overlay"
        className={
          open
            ? "gb-fixed gb-w-full gb-h-full gb-z-[5] gb-top-0 gb-left-0 gb-right-0 gb-bottom-0 gb-bg-black gb-opacity-50 gb-cursor-pointer border-2"
            : "hidden"
        }
        onClick={onClose}
      ></div>
    </>
  );
}
