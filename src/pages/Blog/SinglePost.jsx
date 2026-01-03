import { useLoaderData } from "react-router-dom";

const SinglePost = () => {
    const posts = useLoaderData();
    const {title, body, image} = posts;
    return (
        <>
            <div className="p-5">
                <div><img src={image}/></div>
                <h1 className="text-[20px] font-bold capitalize">{title}</h1>
                <p className="mt-5">{body}</p>
            </div>
        </>
    );
};

export default SinglePost;