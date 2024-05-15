import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({title, excerpt, coverImage, author,date, slug}) => {
    return (
        <Link href={`/project/${slug}`}>
            <div className="relative flex flex-col text-gray-700 bg-clip-border rounded-xl w-full">
                <div className="relative overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-52">
                    <Image
                        loading={"lazy"}
                        src={coverImage}
                        width={320}
                        height={208}
                        alt={"card-image"}
                        className={"object-cover w-full h-full"}
                    />
                </div>
                <div className="px-2 py-4">
                    {/*<p className="block font-sans text-base antialiased font-medium leading-relaxed text-primaryMain">
                        {categories}
                    </p>*/}
                    <div className="flex items-center justify-between mb-2">
                        <h5 className="truncate block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {title}
                        </h5>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;