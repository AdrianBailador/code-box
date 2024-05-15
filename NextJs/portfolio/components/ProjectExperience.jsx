import Image from 'next/image';
import {personalDescription, workExperience, education, skills, softSkills, hardSkills} from '../static_content/index';

const ProjectExperience = () => (
    <div className="relative flex flex-col gap-8 text-gray-700 bg-clip-border rounded-xl w-full mt-10 px-4">
        {/*Description or About me -- Section*/}
        <div className="mb-4">
            <p>{personalDescription.description}</p>
        </div>

        {/*Work Experience -- Section*/}
        <section className='flex flex-col gap-4'>
            <h1 className="text-2xl font-medium">Work Experience</h1>
            {workExperience.map((experience, index) => (
                <div key={index} className="flex flex-col gap-2">
                    <h2 className="text-xl font-medium">{experience.title}</h2>
                    <div className='flex gap-2 items-center'>
                <span className='bg-primaryMain px-2 py-[3px] rounded-md text-xs text-white'>
                {experience.currentJob ? "Present" : experience.startDate + " - " + experience.endDate}

                  </span>
                        <h3 className='text-md font-medium'>{`${experience.company} / ${experience.country}`}</h3>
                    </div>
                    <p>{experience.description}</p>
                </div>
            ))}
        </section>

        {/*Education -- Section*/}
        <section className='flex flex-col gap-4'>
            <h1 className="text-2xl font-medium">Education</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {education.map((experience, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className='flex gap-2 items-center'>
            <span className='bg-primaryMain px-2 py-[3px] rounded-md text-xs text-white'
                  style={{display: 'inline-block'}}>
            {experience.currentUni ? "Present" : experience.startDate + " - " + experience.endDate}
            </span>
                        </div>
                        <h2 className="text-xl font-medium">{experience.title}</h2>

                        <p>{`${experience.university} / ${experience.country}`}</p>
                    </div>
                ))}
            </div>
        </section>

        {/*Hard Skills -- Section*/}
        <section className='flex flex-col gap-4'>
            <h1 className="text-2xl font-medium">Hard Skills</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {hardSkills.map((experience, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <div className='flex gap-2 items-center rounded-xl overflow-hidden'>
                            <Image
                                width={200}
                                height={200}
                                src={experience.imageUrl}
                                alt={experience.name}
                                className={"object-cover w-full h-full"} />
                        </div>
                        <h5 className="text-xs font-poppins text-base leading-[9.5px] text-left text-green-600">
                            {experience.description}
                        </h5>
                        <p>{experience.name}</p>
                    </div>
                ))}
            </div>
        </section>

        {/*Soft Skills -- Section*/}
        <section className='flex flex-col gap-4'>
            <h1 className="text-2xl font-medium">Soft Skills</h1>
            <div className="grid grid-cols-2 gap-4">
                {softSkills.map((experience, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <h5 className="text-lg font-medium">{experience.description}</h5>
                    </div>
                ))}
            </div>
        </section>
    </div>
);

export default ProjectExperience;
