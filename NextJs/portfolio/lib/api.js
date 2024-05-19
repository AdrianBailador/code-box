import {join} from "path";
import fs from "fs";
import matter from "gray-matter";
import { Console } from "console";

//Projects

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


//Blogs

const blogDirectory = join(process.cwd(), "_content/_blogs");

const getBlogsSlugs = () => {
    return fs.readdirSync(blogDirectory);
}

export const getBlogsBySlug = (slug) => {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(blogDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {...data, slug: realSlug, content};
}

export const getAllBlogs = () => {
    const slugs = getBlogsSlugs();
    console.log(slugs)
    const blogs = slugs.map(
        (slug) => getBlogsBySlug(slug)
    );
    return blogs
}


//Education

const educationDirectory = join(process.cwd(), "_content/_education");

const getEducationSlugs = () => {
    return fs.readdirSync(educationDirectory);
}

export const getEducationBySlug = (slug) => {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(educationDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {...data, slug: realSlug, content};
}

export const getAllEducation = () => {
    const slugs = getEducationSlugs();
    console.log(slugs)
    const education = slugs.map(
        (slug) => getEducationBySlug(slug)
    );
    return education
}
