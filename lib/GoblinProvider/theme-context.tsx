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

export interface GoblinProvider {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const GoblinThemeContext = createContext<GoblinProvider>({
  theme: getAppTheme(),
  setTheme: setAppTheme,
});

export function useGoblinTheme(): GoblinProvider {
  return useContext<GoblinProvider>(GoblinThemeContext);
}

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
