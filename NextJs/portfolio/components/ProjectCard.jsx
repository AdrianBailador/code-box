import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../static_content/index';

const ProjectCard = () => (
  <div className="grid grid-cols-2 gap-4">
    {projects.map((project, index) => (
      <div key={index} className="card">
        <Link href={`/project/${project.id}`}>
          
            <Image src={project.imageUrl} alt={project.title} width={500} height={300} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          
        </Link>
      </div>
    ))}
  </div>
);

export default ProjectCard;
