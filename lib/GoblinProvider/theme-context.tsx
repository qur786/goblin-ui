import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Theme,
  getTheme as getAppTheme,
  setTheme as setAppTheme,
} from "./utils";
import {
  Notification,
  NotificationProps,
  type NotificationRef,
} from "../Notification";

/**
 * GoblinProvider interface.
 * @public
 */
export interface GoblinProvider {
  /**
   * The current theme of the app.
   */
  theme: Theme;
  /**
   * A function to set theme to either "dark" or "light".
   */
  setTheme: (theme: Theme) => void;
  /**
   * A function to trigger a notification to be shown.
   */
  triggerNotification: (args: NotificationProps) => void;
}

const GoblinThemeContext = createContext<GoblinProvider>({
  theme: getAppTheme(),
  setTheme: setAppTheme,
  triggerNotification: () => {
    console.log("Some issue occured while setting up the global context.");
  },
});

/**
 * A react custom hook to access Goblin UI current theme and method to set theme to "dark" or "light".
 * @returns {GoblinProvider}
 * @public
 */
export function useGoblin(): GoblinProvider {
  return useContext<GoblinProvider>(GoblinThemeContext);
}

/**
 * Goblin context provider to wrap the whole app to provide theme support to the app.
 * @param {PropsWithChildren} props
 * @returns {JSX.Element}
 * @public
 */
export function GoblinProvider({ children }: PropsWithChildren): JSX.Element {
  const [theme, setTheme] = useState<Theme>(getAppTheme());
  const notificationRef = useRef<NotificationRef>(null);

  const setThemeValue: GoblinProvider["setTheme"] = (theme) => {
    setAppTheme(theme);
    setTheme(getAppTheme());
  };

  const triggerNotification: GoblinProvider["triggerNotification"] =
    useCallback((args) => {
      if (notificationRef.current) {
        notificationRef.current.displayNotification(args);
      }
    }, []);

  useLayoutEffect(() => {
    setAppTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Update theme only one for the first time as per 'getTheme'

  const value = useMemo<GoblinProvider>(
    () => ({
      theme,
      setTheme: setThemeValue,
      triggerNotification,
    }),
    [theme, triggerNotification],
  );

  return (
    <GoblinThemeContext.Provider value={value}>
      <div id="goblin-root">{children}</div>
      <Notification ref={notificationRef} />
    </GoblinThemeContext.Provider>
  );
}
