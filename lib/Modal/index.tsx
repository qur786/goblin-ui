import { Button } from "../Button";
import type { PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  fullScreen?: boolean;
  height?: number;
  width?: number;
}

export function Modal({
  children,
  open,
  fullScreen,
  onClose,
  height = 380,
  width = 380,
}: ModalProps): JSX.Element {
  return (
    <>
      <div
        style={{
          minHeight: fullScreen ? "100vh" : height,
          width: fullScreen ? "100vw" : width,
          top: open ? (fullScreen ? 0 : `calc(50vh - ${height / 2}px)`) : -2000,
          left: `calc(50vw - ${width / 2}px)`,
        }}
        className={"gb-z-10 gb-transition-[top] gb-fixed gb-duration-1000"}
      >
        <div className="gb-flex gb-flex-col gb-justify-between gb-h-full gb-w-full gb-p-6 gb-box-border gb-rounded-md gb-shadow-md gb-bg-white dark:gb-text-white dark:gb-bg-[#1E1E1E]">
          {children}
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
