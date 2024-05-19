import EducationCard from "@/components/EducationCard";
import {getAllEducation} from "@/lib/api";

const EducationList = () => {
    const allEducation = getAllEducation();

    return (
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
    );
};

export default EducationList;