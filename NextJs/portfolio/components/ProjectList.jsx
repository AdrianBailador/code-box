import ProjectCard from "@/components/ProjectCard";
import {projects} from "@/static_content";

const ProjectList = () => {
    return (
        <div className={"grid gap-4 grid-cols-2 mt-10"}>
            {projects.map((project, index) => {
                return <ProjectCard key={project.id} name={project.title} url={project.url} image={project.imageUrl} categories={project.categories} slug={project.slug}/>
            })}
        </div>
    );
};

export default ProjectList;