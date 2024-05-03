import Image from 'next/image';
import { personalDescription, workExperience, education, skills } from '../static_content/index';

const ProjectExperience = () => (
  <div className="space-y-8">
    <div className="card p-4 shadow-lg">
      <h2 className="text-2xl font-bold">{personalDescription.description}</h2>
    </div>

    <h1 className="text-3xl font-bold">Work Experience</h1>
    <div className="grid grid-cols-2 gap-4">
      {workExperience.map((experience, index) => (
        <div key={index} className="card p-4 shadow-lg">
          <Image src={experience.imageUrl} alt={experience.name} width={500} height={300} />
          <h2 className="text-2xl font-bold">{experience.name}</h2>
          <p>{experience.description}</p>
          <ul className="list-disc list-inside">
            {experience.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <h1 className="text-3xl font-bold">Education</h1>
    <div className="grid grid-cols-2 gap-4">
      {education.map((edu, index) => (
        <div key={index} className="card p-4 shadow-lg">
          <Image src={edu.imageUrl} alt={edu.name} width={500} height={300} />
          <h2 className="text-2xl font-bold">{edu.name}</h2>
          <p>{edu.description}</p>
          <ul className="list-disc list-inside">
            {edu.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <h1 className="text-3xl font-bold">Skills</h1>
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <div key={index} className="card p-4 shadow-lg">
          <Image src={skill.imageUrl} alt={skill.name} width={500} height={300} />
          <h2 className="text-2xl font-bold">{skill.name}</h2>
          <p>{skill.description}</p>
         </div>
      ))}
    </div>
  </div>
);

export default ProjectExperience;
