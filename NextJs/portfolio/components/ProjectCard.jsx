import Link from 'next/link';
import Image from 'next/image';
import { projects } from '../static_content/index';

const ProjectCard = () => (
  <div className="grid grid-cols-2 gap-4">
    {projects.map((project, index) => (
      <div key={index} className="rounded overflow-hidden shadow-lg m-2">
        <Link href={`/project/${project.slug}`}>         
            <Image className="w-full" src={project.imageUrl} alt={project.title} width={500} height={300} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.title}</div>
              <p className="text-gray-700 text-base">{project.description}</p>
            </div>        
        </Link>
      </div>
    ))}
  </div>
);

export default ProjectCard;
