import Image from 'next/image';
import { personalDescription, workExperience, education, skills, softSkills, hardSkills } from '../static_content/index';

const ProjectExperience = () => (
  <div className="relative flex flex-col gap-4 text-gray-700 bg-clip-border rounded-xl w-full mt-10 px-4">
    <div className="description-section">
      <p>{personalDescription.description}</p>
    </div>

    <section className='flex flex-col gap-4'>
    <h1 className="text-2xl font-bold">Work Experience</h1>
      {workExperience.map((experience, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">{experience.title}</h2>
          <div className='flex gap-2 items-center'>
            <span className='bg-primaryMain px-2 py-[3px] rounded-md text-xs text-white'>
            {experience.currentJob ? "Present" : experience.startDate + " - " + experience.endDate}

              </span>
            <h3 className='text-md font-bold'>{`${experience.company} / ${experience.country}`}</h3>
          </div>
          <p>{experience.description}</p>
        </div>
      ))}
   
    </section>

    <section className='flex flex-col gap-4'>
    <h1 className="text-2xl font-bold">Education</h1>
    <div className="grid grid-cols-2 gap-4">
      {education.map((experience, index) => (
        <div key={index} className="flex flex-col gap-2">
            <div className='flex gap-2 items-center'>
            <span className='bg-primaryMain px-2 py-[3px] rounded-md text-xs text-white' style={{display: 'inline-block'}}>
            {experience.currentUni ? "Present" : experience.startDate + " - " + experience.endDate}
            </span>
          </div>
          <h2 className="text-xl font-bold">{experience.title}</h2>
        
          <p>{`${experience.university} / ${experience.country}`}</p>
        </div>
      ))}
    </div>
</section>

<section className='flex flex-col gap-4'>
    <h1 className="text-2xl font-bold">Hard Skills</h1>
    <div className="grid grid-cols-4 gap-4">
        {hardSkills.map((experience, index) => (
            <div key={index} className="flex flex-col gap-2">
                <div className='flex gap-2 items-center'>
                    <img src={experience.imageUrl} alt={experience.name} className="w-10 h-10 rounded-full" />
                </div>
                <h2 className="text-xs font-poppins text-base leading-[9.5px] text-left text-green-600">
    {experience.description}
</h2>


                <p>{experience.name}</p>
            </div>
        ))}
    </div>
</section>


<section className='flex flex-col gap-4'>
    <h1 className="text-2xl font-bold">Soft Skills</h1>
    <div className="grid grid-cols-2 gap-4">
      {softSkills.map((experience, index) => (
        <div key={index} className="flex flex-col gap-2">
         
          <h2 className="text-xl font-bold">{experience.description}</h2>
        </div>
      ))}
    </div>
</section>



  
  </div>
);

export default ProjectExperience;
