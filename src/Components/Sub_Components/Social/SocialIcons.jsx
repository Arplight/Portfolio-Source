import { BsGithub } from "react-icons/bs";
import { FaFreeCodeCamp, FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { GiSmartphone } from "react-icons/gi";

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a
        href="https://www.linkedin.com/in/muhammad96osama/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="icon" />
      </a>
      <a
        href="https://github.com/Arplight"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub className="icon" />
      </a>
      <a
        href="https://www.freecodecamp.org/Arplight"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFreeCodeCamp className="icon" style={{ fontSize: 29 }} />
      </a>
      <a href="mailto:muhammad96osama@gmail.com">
        <GoMail className="icon block md:hidden" />
      </a>
      <a href="tel:+201003793140">
        <GiSmartphone
          className="icon block md:hidden"
          style={{ fontSize: 22 }}
        />
      </a>
    </div>
  );
}
