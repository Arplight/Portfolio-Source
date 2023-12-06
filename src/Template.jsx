import { Link } from "react-router-dom";
import TagStart from "./assets/icons/start-tag.svg";
import TagEnd from "./assets/icons/end-tag.svg";
import ThemeSwitcher from "./Components/Sub_Components/Theme_Toggler/ThemeSwitcher";

export default function Template() {
  return (
    <>
      {/* Main Headings */}
      <h1>Hi, I’m Pavel Tarasenko</h1>
      <h1>Portfolio</h1>
      <br />
      <br />
      {/* Skill Headings */}
      <h2>React</h2>
      <h2>Redux</h2>
      <h2>TypeScript</h2>
      <br />
      <br />
      {/* skill name heading */}
      <h3>Javascript, Level 3</h3>
      <h3>Javascript, Level 2</h3>
      <h3>HTML and CSS, Level 2</h3>
      <br />
      <br />
      {/* Paragraphs */}
      <p className="main-paragraph ">
        I’m Pavel from Kyiv, Ukraine. I have more than 2 years’ experience in
        HTML/CSS/Javascript. I love creating user interfaces which are
        intuitive, convenient and beautiful. Of course, I’m paying attention to
        performance and accessibility that I consider to be highly important.
      </p>
      <br />
      <p className="work-paragraph ">
        I wanted to make a simple portfolio site and with laconic design on one
        hand and not intrusive animation on the other.
      </p>
      <br />
      <b className="work-skills">Gatsby, React, GraphQL, PWA, CSS, GSAP</b>{" "}
      <br />
      <span className="skill-info">
        <p className=" inline">Skyeng /&nbsp;</p>{" "}
        <a className="link text-xs" href="http://">
          Certificate
        </a>
      </span>{" "}
      <br />
      <br />
      {/* Buttons */}
      <a
        href="#"
        target="_blank"
        className="main-button button-light button-dark"
        rel="noopener noreferrer"
      >
        DISCOVER
      </a>
      <a
        href="#"
        target="_blank"
        className="main-button button-light button-dark"
        rel="noopener noreferrer"
      >
        VIEW CODE
      </a>
      <button className="main-button button-light button-dark" type="submit">
        GET IN TOUCH
      </button>
      <br />
      <br />
      {/* Links */}
      <span>
        <p className="inline text-xs">E-MAIL&nbsp;&nbsp;</p>
        <a
          className="link text-base"
          href="mailto:"
          target="_blank"
          rel="noopener noreferrer"
        >
          pavlo.tarasenko.dev@gmail.com
        </a>
      </span>
      <br />
      <span>
        <p className="inline text-xs">PHONE&nbsp;&nbsp;</p>
        <a
          className="link"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          +38(098)172-83-25
        </a>
      </span>
      <br />
      <br />
      {/* Form */}
      <label htmlFor="name">
        Name <br />
        <input
          className="w-full md:w-1/2 form-dark form-light"
          type="text"
          name="name"
          id="name"
        />
      </label>
      <br />
      <label htmlFor="mail">
        E-mail <br />
        <input
          className="w-full md:w-1/2 form-dark form-light"
          type="email"
          name="mail"
          id="mail"
        />
      </label>
      <br />
      <label htmlFor="message">
        What I need to know?
        <br />
        <textarea
          className="w-full form-dark form-light"
          name="message"
          id="message"
        ></textarea>
      </label>
      {/* Nav links */}
      <nav className="col-span-4 lg:col-span-1 ">
        <ul className="flex flex-row lg:flex-col gap-y-0 gap-x-5 md:gap-y-8 gap-x-5 justify-center">
          <li>
            <Link to="/about" className="nav-link">
              <img className="start-tag" src={TagStart} alt="" />
              ABOUT
              <img className="end-tag" src={TagEnd} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/work" className="nav-link">
              <img className="start-tag" src={TagStart} alt="" />
              WORK
              <img className="end-tag" src={TagEnd} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/skills" className="nav-link">
              <img className="start-tag" src={TagStart} alt="" />
              SKILLS
              <img className="end-tag" src={TagEnd} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              <img className="start-tag" src={TagStart} alt="" />
              CONTACT
              <img className="end-tag" src={TagEnd} alt="" />
            </Link>
          </li>
        </ul>
      </nav>
      <br />
      {/* ThemeSwitcher */}
      <ThemeSwitcher />
      <br /> <br />
      {/* Logo */}
      <div className="logo">
        <img className="start-tag" src={TagStart} alt="" />
        <Link to="\" className="text-lg name">
          Arplight
        </Link>
        <img className="end-tag" src={TagEnd} alt="" />
      </div>
    </>
  );
}
