import { NavLink } from "react-router-dom";

const BlogPosts = ({post}) => {
    const {title, id, image} = post;
    return (
        <>
            <div className="border border-gray-300 p-5 rounded-lg">
                <div className="max-w-100"><img src={image} className="h-75"/></div>
                <h2 className="capitalize font-bold text-[18px] mt-5">{title}</h2>
                <NavLink to={`posts/${id}`}><button className="btn capitalize mt-5">see details</button></NavLink>
            </div>
        </>
    );
};

export default BlogPosts;