import Image from 'next/image';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del Proyecto 1',
    imageUrl: '/Logotemp.png',
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del Proyecto 2',
    imageUrl: '/Logotemp.png',
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción del Proyecto 1',
    imageUrl: '/Logotemp.png',
  },
  {
    title: 'Proyecto 4',
    description: 'Descripción del Proyecto 2',
    imageUrl: '/Logotemp.png',
  },
  {
    title: 'Proyecto 5',
    description: 'Descripción del Proyecto 1',
    imageUrl: '/Logotemp.png',
  },
  {
    title: 'Proyecto 6',
    description: 'Descripción del Proyecto 2',
    imageUrl: '/Logotemp.png',
  },

];

const ProjectCard = () => (
  <div className="grid grid-cols-2 gap-4">
    {projects.map((project, index) => (
      <div key={index} className="card">
        <Image src={project.imageUrl} alt={project.title} width={500} height={300} />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    ))}
  </div>
);

export default ProjectCard;
