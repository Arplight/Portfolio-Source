import Download from "../../assets/icons/download.svg";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Seo from "../../Components/Sub_Components/SEO/Seo";

export default function About() {
  return (
    <div className="about  gap-y-8 flex-col">
      <Seo title="About | Portfolio" url="/About" />

      <Slide top>
        <h1>Hi, I’m Muhammad</h1>
      </Slide>
      <Fade delay={400}>
        <p className="main-paragraph w-full xl:w-3/5">
          I’m a highly motivated and dedicated individual seeking a challenging
          role in front-end development. With a strong foundation in web
          technologies and a passion for creating engaging user experiences.
        </p>
      </Fade>
      <Fade delay={800}>
        <div className="download">
          <img src={Download} />
          <a href="https://drive.google.com/file/d/1JITQuyl4TX5DmsRDakEK9S_3a9unpDrX/view?usp=sharing">
            DOWNLOAD {"\u00A0"}CV
          </a>
        </div>
      </Fade>
    </div>
  );
}
