import Image from 'next/image';
import { personalDescription, workExperience, education, skills } from '../static_content/index';

const ProjectExperience = () => (
  <div className="relative flex flex-col gap-4 text-gray-700 bg-clip-border rounded-xl w-full mt-10 px-4">
    <div className="description-section">
      <p className="font-bold">{personalDescription.description}</p>
    </div>

    <section className='flex flex-col gap-4'>
    <h1 className="text-2xl font-bold">Work Experience</h1>
      {workExperience.map((experience, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">{experience.title}</h2>
          <div className='flex gap-2 items-center'>
            <span className='bg-primaryMain px-2 py-[3px] rounded-md text-xs text-white'>
            {experience.currentJob ? "Present" : experience.startdate + " - " + experience.endDate} 

              </span>
            <h3 className='text-md font-bold'>{`${experience.company} / ${experience.country}`}</h3>
          </div>
          <p>{experience.description}</p>
        </div>
      ))}
   
    </section>

  
  </div>
);

export default ProjectExperience;
