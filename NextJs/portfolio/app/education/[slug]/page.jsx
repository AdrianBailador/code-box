import {notFound} from "next/navigation";
import {RiArrowLeftCircleFill, RiArrowLeftLine} from "@remixicon/react";
import Link from "next/link";
import Image from "next/image";
import markdownToHtml from "@/lib/markdownToHtml";
import markdownStyles from "@/styles/markdown-styles.module.css";
import {getEducationBySlug} from "@/lib/api";

export default async function EducationPage({ params }) {
    const post = getEducationBySlug(params.slug);
    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post.content || "");

    return (
        <div className="container flex min-h-screen flex-col items-center gap-10 py-24">
            <Link className="hidden lg:flex rounded-full bg-primary p-2" href={"/education"}>
                <RiArrowLeftCircleFill size="24px" color="white"/>
            </Link>
            <h1 className={"'text-2xl lg:text-3xl xl:text-3xl text-card-foreground'"}>
                {post.title} {/* Cambiado de slug a title para mostrar el título */}
            </h1>
            <p className={"text-primaryMain"}>
                {post.categories.join(', ')}
            </p>
            <Image
                className={"rounded-2xl object-cover w-full h-full"}
                width={640}
                height={416}
                src={post.coverImage}
                alt={`Image of ${post.title}`}
            />
            <div className="max-w-2xl mx-auto">
                <div
                    className={markdownStyles["markdown"]}
                    dangerouslySetInnerHTML={{__html: content}}
                />
            </div>
            <Link className="text-white rounded-lg bg-primary px-4 py-2" href={"/education"}>
                    Back
                </Link>
        </div>
    );
}

export function getPostBySlug(slug) {
    return educationData.find((education) => education.slug === slug);
}