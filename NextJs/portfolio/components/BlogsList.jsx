import { getAllBlogs } from "@/lib/api";
import BlogCard from "./BlogCard";

const BlogList = () => {
    const allBlogs = getAllBlogs();


    return (
        <div className={"w-full grid gap-4 grid-cols-1 md:grid-cols-2 mt-10"}>
            {allBlogs.map((blog, index) => {
                return <BlogCard
                    key={blog.slug}
                    title={blog.title}
                    coverImage={blog.coverImage}
                    excerpt={blog.excerpt}
                    categories={blog.categories}
                    createDate={blog.createDate}
                    updateDatedate={blog.updateDate}
                    slug={blog.slug}
                    author={blog.author}
                    picture={blog.picture}
                />
            })}
        </div>
    );
};

export default BlogList;

