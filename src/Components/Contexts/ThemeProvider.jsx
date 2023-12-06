import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();
export default function ThemeProvider(Props) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") !== null
      ? localStorage.getItem("theme")
      : "light"
  );
  function themeSetter() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  // Local Storage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeSetter }}>
      {Props.children}
    </ThemeContext.Provider>
  );
}
