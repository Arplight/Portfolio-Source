// Work Component
import WorkComponent from "../../Components/Sub_Components/Work_Component/WorkComponent";
import { useContext } from "react";
import { PaginationContext } from "../../Components/Contexts/PaginationProvider";
import Seo from "../../Components/Sub_Components/SEO/Seo";

export default function Work() {
  const { currentPageData } = useContext(PaginationContext);
  return (
    <>
      <Seo title="Work | Portfolio" url="/Work" />
      {currentPageData.map((project, projectId) => (
        <WorkComponent
          key={projectId}
          projectName={project.project_name}
          projectImage={project.project_image}
          projectDemo={project.project_demo}
          projecCode={project.project_code}
          projectDescription={project.project_description}
          projectSkills={project.project_skills}
        />
      ))}
    </>
  );
}
