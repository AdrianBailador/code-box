import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({title, excerpt, coverImage, categories, author,date, slug}) => {
    return (
        <div className="w-full">
            <Link href={`/project/${slug}`}>
            <div className="flex flex-col bg-clip-border rounded-xl">
                    <div className="relative overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-52">
                        <Image
                            priority={true}
                            src={coverImage}
                            width={320}
                            height={208}
                            alt={"card-image"}
                            className={"w-full h-full"}
                            style={{objectFit: "cover"}}
                            quality={50}
                        />
                    </div>
                    <div className="px-2 py-4">
                        {
                               <p className="block font-sans text-base antialiased font-medium leading-relaxed text-primary">
                               {categories.join(', ')}
                           </p>}
                        <div className="flex items-center justify-between mb-2">
                            <h5 className="truncate block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-text">
                                {title}
                            </h5>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;