import { NavLink } from "react-router-dom";

const BlogPosts = ({post}) => {
    const {title, id} = post;
    return (
        <>
            <div className="border border-gray-300 p-5 rounded-lg">
                <h2 className="capitalize font-bold text-[18px]">{title}</h2>
                <NavLink to={`posts/${id}`}><button className="btn capitalize mt-5">see details</button></NavLink>
            </div>
        </>
    );
};

export default BlogPosts;