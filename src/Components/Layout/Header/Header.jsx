// React Router
import { Link } from "react-router-dom";
// Components
import ThemeSwitcher from "../../Sub_Components/Theme_Toggler/ThemeSwitcher";
import TagStart from "../../../assets/icons/start-tag.svg";
import TagEnd from "../../../assets/icons/end-tag.svg";
// Contexts
import { useContext } from "react";
import { ActiveContext } from "../../Contexts/ActiveProvider";

export default function Header() {
  const { activeSetter } = useContext(ActiveContext);
  return (
    <header className="col-span-4 ">
      <div data-active="home" onClick={activeSetter} className="logo">
        <img className="start-tag" src={TagStart} alt="" />
        <Link to="/" className="text-lg name">
          Arplight
        </Link>
        <img className="end-tag" src={TagEnd} alt="" />
      </div>
      <ThemeSwitcher />
    </header>
  );
}
