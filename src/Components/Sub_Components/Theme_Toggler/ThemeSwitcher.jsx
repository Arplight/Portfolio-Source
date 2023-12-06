import LightMode from "../../../assets/icons/ligh-mode.svg";
import DarkMode from "../../../assets/icons/dark-mode.svg";
import { ThemeContext } from "../../Contexts/ThemeProvider";
import { useContext } from "react";
export default function ThemeSwitcher() {
  const { themeSetter, theme } = useContext(ThemeContext);
  function btnToggler(e) {
    e.target.classList.toggle("btn-toggle");
  }

  return (
    <div className="theme-switcher dark-switcher light-switcher">
      <img src={LightMode} />
      <button
        onClick={(e) => {
          themeSetter();
          btnToggler(e);
        }}
        className={`toggler ${theme === "light" ? "" : "btn-toggle"}`}
      ></button>
      <img src={DarkMode} />
    </div>
  );
}
