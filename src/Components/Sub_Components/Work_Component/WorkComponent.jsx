import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { memo } from "react";

function WorkComponent(Props) {
  return (
    <div className="work flex items-center flex-col xl:flex-row gap-y-10 xl:gap-y-0 gap-x-0 xl:gap-x-8 ">
      <div className="project-info flex flex-col gap-2.5 w-full xl:w-2/5 ">
        <Slide top key={Math.random()}>
          <h1>{Props.projectName}</h1>
        </Slide>
        <Fade key={Math.random()} delay={400}>
          <article>
            <p className="work-paragraph">{Props.projectDescription}</p>
            <b className="work-skills ">{Props.projectSkills}</b>
          </article>
        </Fade>
        <Fade key={Math.random()} delay={800}>
          <div className="buttons mt-10 hidden xl:flex ">
            <a
              href={Props.projectDemo}
              target="_blank"
              className="main-button button-light button-dark mr-5"
              rel="noopener noreferrer"
            >
              DISCOVER
            </a>
            <a
              href={Props.projecCode}
              target="_blank"
              className="main-button button-light button-dark"
              rel="noopener noreferrer"
            >
              VIEW CODE
            </a>
          </div>
        </Fade>
      </div>
      <Fade key={Math.random()} delay={800} right>
        <div className="project-image w-full xl:w-3/5">
          <img src={Props.projectImage} alt={Props.projectName} />
        </div>
      </Fade>
      <Fade key={Math.random()} delay={800}>
        <div className="buttons mt-5 flex flex-col w-full xl:hidden ">
          <a
            href={Props.projectDemo}
            target="_blank"
            className="main-button button-light button-dark mb-5 "
            rel="noopener noreferrer"
          >
            DISCOVER
          </a>
          <a
            href={Props.projecCode}
            target="_blank"
            className="main-button button-light button-dark"
            rel="noopener noreferrer"
          >
            VIEW CODE
          </a>
        </div>
      </Fade>
    </div>
  );
}

export default memo(WorkComponent);
