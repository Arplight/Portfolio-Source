// React Router
import { Link } from "react-router-dom";
// Icons
import TagStart from "../../../assets/icons/start-tag.svg";
import TagEnd from "../../../assets/icons/end-tag.svg";
// Contexts
import { ActiveContext } from "../../Contexts/ActiveProvider";
import { useContext } from "react";

export default function Navbar() {
  const { active, activeSetter } = useContext(ActiveContext);

  return (
    <nav className="col-span-4 lg:col-span-1 justify-center">
      <ul className="flex flex-row lg:flex-col gap-y-0 md:gap-y-8 gap-x-5  lg:gap-x-0 justify-center">
        <li>
          <Link
            to="/about"
            data-active="about"
            onClick={activeSetter}
            className={`nav-link ${active === "about" ? "nav-active" : ""}`}
          >
            <img className="start-tag" src={TagStart} alt="" />
            ABOUT
            <img className="end-tag" src={TagEnd} alt="" />
          </Link>
        </li>
        <li>
          <Link
            to="/work"
            data-active="work"
            onClick={activeSetter}
            className={`nav-link ${active === "work" ? "nav-active" : ""}`}
          >
            <img className="start-tag" src={TagStart} alt="" />
            WORK
            <img className="end-tag" src={TagEnd} alt="" />
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            data-active="skills"
            onClick={activeSetter}
            className={`nav-link ${active === "skills" ? "nav-active" : ""}`}
          >
            <img className="start-tag" src={TagStart} alt="" />
            SKILLS
            <img className="end-tag" src={TagEnd} alt="" />
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            data-active="contact"
            onClick={activeSetter}
            className={`nav-link ${active === "contact" ? "nav-active" : ""}`}
          >
            <img className="start-tag" src={TagStart} alt="" />
            CONTACT
            <img className="end-tag" src={TagEnd} alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
