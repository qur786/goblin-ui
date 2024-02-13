import {
  PropsWithChildren,
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import {
  Theme,
  getTheme as getAppTheme,
  setTheme as setAppTheme,
} from "./utils";

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
   * @param theme
   * @returns { void }
   */
  setTheme: (theme: Theme) => void;
}

const GoblinThemeContext = createContext<GoblinProvider>({
  theme: getAppTheme(),
  setTheme: setAppTheme,
});

/**
 * A react custom hook to access Goblin UI current theme and method to set theme to "dark" or "light".
 * @returns {GoblinProvider}
 * @public
 */
export function useGoblinTheme(): GoblinProvider {
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

  const setThemeValue: GoblinProvider["setTheme"] = (theme) => {
    setAppTheme(theme);
    setTheme(getAppTheme());
  };

  useLayoutEffect(() => {
    setAppTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Update theme only one for the first time as per 'getTheme'

  const value = useMemo<GoblinProvider>(
    () => ({
      theme,
      setTheme: setThemeValue,
    }),
    [theme],
  );

  return (
    <GoblinThemeContext.Provider value={value}>
      <div id="goblin-root">{children}</div>
    </GoblinThemeContext.Provider>
  );
}
