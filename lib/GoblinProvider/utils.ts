/**
 * Possible theme supported.
 */
export type Theme = "dark" | "light";

export const THEME_KEY = "goblin-ui-theme";

/**
 * Function to get theme stored in the local storage.
 */
function getStoredTheme(): Theme | null {
  return window.localStorage.getItem(THEME_KEY) as Theme | null;
}

/**
 * Function to get the applied theme.
 */
function getNativeTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

/**
 * Function to get the available theme.
 */
export function getTheme(): Theme {
  return getStoredTheme() ?? getNativeTheme();
}

/**
 * Function to set theme with the provided theme value.
 */
export function setTheme(theme: Theme): void {
  if (theme === "dark") {
    (document.getElementById("goblin-root") as HTMLDivElement).classList.add(
      "dark",
    );
  }

  if (theme === "light") {
    (document.getElementById("goblin-root") as HTMLDivElement).classList.remove(
      "dark",
    );
  }

  window.localStorage.setItem(THEME_KEY, theme);
}
