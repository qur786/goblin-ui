export type Theme = "dark" | "light";

export const THEME_KEY = "goblin-ui-theme";

function getStoredTheme(): Theme | null {
  return window.localStorage.getItem(THEME_KEY) as Theme | null;
}

function getNativeTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function getTheme(): Theme {
  return getStoredTheme() ?? getNativeTheme();
}

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
