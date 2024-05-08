import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { projects as projectData } from '@/static_content/index';

const getProjectBySlug = (slug) => {
  return projectData.find((project) => project.slug === slug);
};

const ProjectPage = ({ params }) => {
  const { slug } = params;
  const [project, setProject] = useState(null);

  useEffect(() => {
    const project = getProjectBySlug(slug);
    setProject(project);
  }, [slug]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details">
      <Image src={project.imageUrl} alt={project.title} width={500} height={300} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <ul>
        {project.languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
    </div>
  );
};

export default ProjectPage;
