import { useContext } from "react";
import { Link } from "react-router-dom";
import { ActiveContext } from "../../Components/Contexts/ActiveProvider";
// Animation
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Seo from "../../Components/Sub_Components/SEO/Seo";
export default function Home() {
  const { activeSetter } = useContext(ActiveContext);
  return (
    <div className="home flex-col ">
      <Seo title="Home | Portfolio" url="/Home" />
      <div className="w-full xl:w-3/5  flex flex-col gap-10 items-center sm:items-start">
        <Slide top>
          <h1 className="text-center sm:text-start">
            I’m a Front-end developer from Alexandria, Egypt
          </h1>
        </Slide>
        <Fade delay={400}>
          <p className="main-paragraph ">
            Creating immersive digital experiences through code and design.
            Passionate about crafting innovative solutions for users.
          </p>
        </Fade>
        <Fade delay={800}>
          <Link
            data-active="nav-4"
            onClick={activeSetter}
            to="/contact"
            className="main-button button-light button-dark w-full sm:w-max "
            type="submit"
          >
            HIRE ME
          </Link>
        </Fade>
      </div>
    </div>
  );
}
