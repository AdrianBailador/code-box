import ProjectCard from "@/components/ProjectCard";
import {getAllProjects} from "@/lib/api";

const ProjectList = () => {
    const allProjects = getAllProjects();

    return (
        <div className={"grid gap-4 grid-cols-2 mt-10"}>
            {allProjects.map((project, index) => {
                return <ProjectCard
                    key={project.slug}
                    title={project.title}
                    coverImage={project.coverImage}
                    excerpt={project.excerpt}
                    /*author={project.author}*/
                    /*date={project.date}*/
                    slug={project.slug}
                />
            })}
        </div>
    );
};

export default ProjectList;