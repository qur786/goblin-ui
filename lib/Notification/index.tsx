import type { MouseEventHandler } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";
import { forwardRef, useImperativeHandle, useState } from "react";

export const NotificationVariant = {
  Success: "success",
  Error: "error",
  Warning: "warning",
} as const;

type NotificationVariant =
  (typeof NotificationVariant)[keyof typeof NotificationVariant];

export const NotificationPosition = {
  BottomLeft: "bottom-left",
  BottomRight: "bottom-right",
  TopLeft: "top-left",
  TopRight: "top-right",
} as const;

type NotificationPosition =
  (typeof NotificationPosition)[keyof typeof NotificationPosition];

export interface NotificationProps {
  /**
   * Title of the notification, the message to be shown.
   */
  title: string;
  /**
   * Variant(texture) of the notification
   */
  variant?: NotificationVariant;
  /**
   * Number of milliseconds the notification should be shown.
   */
  timeout?: number; // In milliseconds
  /**
   * Position from which notification should appear.
   */
  position?: NotificationPosition;
}

export interface NotificationRef {
  displayNotification: (args: NotificationProps) => void;
  hideNotification: () => void;
}

const NotificationColors: Record<NotificationVariant, string> = {
  error: "#FF4848",
  success: "#45CE30",
  warning: "#FF5630",
};

const NotificationPositions: Record<
  NotificationPosition,
  { hide: string; show: string }
> = {
  [NotificationPosition.BottomLeft]: {
    hide: "-gb-left-[1000px] gb-bottom-10",
    show: "gb-left-12 gb-bottom-10",
  },
  [NotificationPosition.BottomRight]: {
    hide: "-gb-right-[1000px] gb-bottom-10",
    show: "gb-right-12 gb-bottom-10",
  },
  [NotificationPosition.TopLeft]: {
    hide: "-gb-left-[1000px] gb-top-10",
    show: "gb-left-12 gb-top-10",
  },
  [NotificationPosition.TopRight]: {
    hide: "-gb-right-[1000px] gb-top-10",
    show: "gb-right-12 gb-top-10",
  },
};

/**
 * The notification component which shows a message to a specified number of milliseconds.
 */
export const Notification = forwardRef<NotificationRef, unknown>(
  function InnerNotification(_, ref): JSX.Element {
    const [show, setShow] = useState(false);
    const [notificationState, setNotificationState] =
      useState<NotificationProps>({
        title: "",
        position: NotificationPosition.BottomRight,
        timeout: 3000,
        variant: NotificationVariant.Success,
      });

    useImperativeHandle(
      ref,
      () => ({
        displayNotification: (args) => {
          setShow(true);
          setNotificationState((prev) => ({ ...prev, ...args }));
          setTimeout(
            () => {
              setShow(false);
            },
            args.timeout ?? notificationState.timeout ?? 3000,
          );
        },
        hideNotification: () => {
          setShow(false);
        },
      }),
      [notificationState.timeout],
    );

    const handleNotificationClose: MouseEventHandler<
      HTMLButtonElement
    > = () => {
      setShow(false);
    };

    return (
      <div
        className={twMerge(
          "gb-flex gb-flex-col gb-gap-2 gb-p-2 gb-rounded-md gb-z-50 gb-shadow-2xl gb-fixed gb-transition-[right_left] gb-duration-1000",
          NotificationPositions[
            notificationState.position ?? NotificationPosition.BottomRight
          ][show ? "show" : "hide"],
        )}
        style={{
          backgroundColor:
            NotificationColors[
              notificationState.variant ?? NotificationVariant.Success
            ],
        }}
      >
        <span className="gb-flex gb-flex-row gb-gap-2 gb-items-center">
          <h6 className="gb-text-md gb-text-white">
            {notificationState.title}
          </h6>
          <button type="button" onClick={handleNotificationClose}>
            <XMarkIcon className="gb-h-4 gb-text-white hover:gb-text-black" />
          </button>
        </span>
      </div>
    );
  },
);
