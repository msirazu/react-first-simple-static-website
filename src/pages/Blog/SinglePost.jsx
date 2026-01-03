import { useLoaderData } from "react-router-dom";

const SinglePost = () => {
    const post = useLoaderData();
    const {title, body} = post;
    return (
        <>
            <div className="p-5">
                <h1 className="text-[20px] font-bold capitalize">{title}</h1>
                <p className="mt-5">{body}</p>
            </div>
        </>
    );
};

export default SinglePost;