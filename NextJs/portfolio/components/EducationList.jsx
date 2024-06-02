import EducationCard from "@/components/EducationCard";
import {getAllEducation} from "@/lib/api";

const EducationList = () => {
    const allEducation = getAllEducation();


    return (
        <div className={"w-full mt-10"}>
        <div className="info text-center mb-5">
            <h1 className={'text-2xl lg:text-3xl xl:text-4xl text-card-foreground'}>Education</h1>
        </div>
        <div className={"w-full grid gap-4 grid-cols-1 md:grid-cols-2 mt-10"}>
            {allEducation.map((education, index) => {
                return <EducationCard
                    key={education.slug}
                    title={education.title}
                    coverImage={education.coverImage}
                    excerpt={education.excerpt}
                    categories={education.categories}
                    slug={education.slug}
                />
            })}
        </div>
        </div>
    );
};

export default EducationList;