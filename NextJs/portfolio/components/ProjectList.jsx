import ProjectCard from "@/components/ProjectCard";
import {getAllProjects} from "@/lib/api";

const ProjectList = () => {
    const allProjects = getAllProjects();

    return (
        <div className={"w-full mt-10"}>
            <div className="info text-center mb-5">
                <h1 className={'text-2xl lg:text-3xl xl:text-4xl text-card-foreground'}>Projects</h1>
            </div>
            <div className={"grid gap-4 grid-cols-1 md:grid-cols-2"}>
                {allProjects.map((project, index) => {
                    return <ProjectCard
                        key={project.slug}
                        title={project.title}
                        coverImage={project.coverImage}
                        excerpt={project.excerpt}
                        categories={project.categories}
                        slug={project.slug}
                    />
                })}
            </div>
        </div>
    );
};

export default ProjectList;
