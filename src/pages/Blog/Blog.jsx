import { useLoaderData } from "react-router-dom";
import BlogPosts from "./BlogPosts";

const Blog = () => {
    const posts = useLoaderData();
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {posts.map(post => {
                    return <BlogPosts key={post.id} post={post}/>
                })}
            </div>
        </>
    );
};

export default Blog;