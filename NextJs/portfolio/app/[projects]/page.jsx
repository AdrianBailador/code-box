import { useRouter } from 'next/router';
import { projects } from '../../static_content/index';
import Image from 'next/image';

const Project = () => {
  const router = useRouter();
  const { projects } = router.query;

  const project = projects.find((project) => project.id === id);

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

export default Project;
