import { getAllBlogs } from "@/lib/api";
import BlogCard from "./BlogCard";

const BlogList = () => {
    const allBlogs = getAllBlogs();


    return (
    <div className={"w-full mt-10"}>
    <div className="info text-center mb-5">
        <h1 className={'text-2xl lg:text-3xl xl:text-4xl text-card-foreground'}>Blogs</h1>
    </div>
    <div className={"grid gap-4 grid-cols-1 md:grid-cols-2"}>
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
        </div>
    );
};

export default BlogList;

