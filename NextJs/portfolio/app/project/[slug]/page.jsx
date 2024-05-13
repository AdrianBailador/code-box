import {notFound} from "next/navigation";
import { projects as projectData } from '@/static_content';
import {RiArrowLeftCircleFill, RiArrowLeftLine} from "@remixicon/react";
import Link from "next/link";
import Image from "next/image";


export function generateStaticParams() {
    return projectData.map(project => ({
        params: { slug: project.slug },
        props: { project }
    }));
}


export default function ProjectPage({ params }) {
    const postProject = getPostBySlug(params.slug);

    if (!postProject) {
        return notFound();
    }

    return (
        <div className="container flex min-h-screen flex-col items-center gap-10 py-24">
            <Link className="hidden lg:flex rounded-full bg-primaryMain p-2" href={"/"}>
                <RiArrowLeftCircleFill size="24px" color="white"/>
            </Link>
            <h1 className={"'text-2xl lg:text-3xl xl:text-3xl text-card-foreground'"}>
                {postProject.title} {/* Cambiado de slug a title para mostrar el título */}
            </h1>
            <p className={"text-primaryMain"}>
                {postProject.categories.join(', ')}
            </p>
            <Image
                className={"rounded-2xl object-cover w-full h-full"}
                width={640}
                height={416}
                src={postProject.imageUrl}
                alt={`Imagen de ${postProject.title}`}
            />
            <p className={"text-silver-n900"}>
                {postProject.description}
            </p>
            <Link className="text-card flex items-center gap-2  rounded-lg bg-primaryMain px-4 py-2" href={"/"}>
                <RiArrowLeftLine size="20px" color="white"/> Back
            </Link>
        </div>
    );
}

export function getPostBySlug(slug) {
    return projectData.find((project) => project.slug === slug);
}