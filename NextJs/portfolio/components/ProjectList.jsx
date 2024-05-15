import ProjectCard from "@/components/ProjectCard";
import {getAllProjects} from "@/lib/api";

const ProjectList = () => {
    const allProjects = getAllProjects();

    return (
        <div className={"w-full grid gap-4 grid-cols-1 md:grid-cols-2 mt-10"}>
            {allProjects.map((project, index) => {
                return <ProjectCard
                    key={project.slug}
                    title={project.title}
                    coverImage={project.coverImage}
                    excerpt={project.excerpt}
                    categories={project.categories}
                    /*author={project.author}*/
                    /*date={project.date}*/
                    slug={project.slug}
                />
            })}
        </div>
    );
};

export default ProjectList;