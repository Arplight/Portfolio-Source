// Skills Data
import { skills_data, skills_list } from "../../Data/Skills_Data";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Seo from "../../Components/Sub_Components/SEO/Seo";

export default function Skills() {
  return (
    <div className="skills flex-col">
      <Seo title="Skills | Portfolio" url="/Skills" />

      <Slide top force={true}>
        <p className="main-paragraph mb-10 w-full md:w-3/5 xl:w-1/2">
          Skills can be taught, personality is inherent. I prefer to keep
          learning, continue challenging myself, and do interesting things that
          matter.
        </p>
      </Slide>

      <div className="flex flex-col md:flex-row">
        <div className="skills-data w-full md:w-3/5">
          {skills_data.map((data, index) => (
            <Fade delay={index * 100} key={index} force={true}>
              <ul className="mb-5">
                <li>
                  <h3>{data.skill}</h3>
                </li>
                <li>
                  <span className="skill-info">
                    <p className=" inline">{data.academy} /&nbsp;</p>
                    <a
                      className="link text-xs"
                      target="blank"
                      href={data.certificate_link}
                    >
                      Certificate
                    </a>
                  </span>
                </li>
              </ul>
            </Fade>
          ))}
        </div>
        <ul className="skills-list w-full md:w-2/5 mt-10 md:mt-0">
          {skills_list.map((skill, index) => (
            <Fade top key={index} delay={index * 100} force={true}>
              <li>
                <span className="skill-icon">{<skill.skill_icon />}</span>
                <h2>{skill.skill_name}</h2>
              </li>
            </Fade>
          ))}
        </ul>
      </div>
    </div>
  );
}
