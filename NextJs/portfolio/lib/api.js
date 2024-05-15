import {join} from "path";
import fs from "fs";
import matter from "gray-matter";


const projectDirectory = join(process.cwd(), "_content/_projects");

const getProjectsSlugs = () => {
    return fs.readdirSync(projectDirectory);
}

export const getProjectsBySlug = (slug) => {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(projectDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content };
}

export const getAllProjects =  () => {
    const slugs = getProjectsSlugs();
    const projects = slugs.map(
        (slug) => getProjectsBySlug(slug)
    );
    return projects
}