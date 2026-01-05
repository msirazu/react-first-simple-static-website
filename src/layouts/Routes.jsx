import { createBrowserRouter } from 'react-router-dom'
import Root from "./Root";
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Blog from '../pages/Blog/Blog';
import LoadingColors from '../components/Loader/LoadingColors';
import SinglePost from '../pages/Blog/SinglePost';
import NotFound from '../pages/NotFound/NotFound';

const router = createBrowserRouter([
    {
        path: '/', element: <Root />, children: [
            { index: true, element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> },
            {
                path: '/blog', loader: async () => {
                    const postsRes = await
                        fetch('/JSON/blog-posts.json');
                    return postsRes.json();
                }, HydrateFallback: () => <div className='flex justify-center my-2'><LoadingColors /></div>, element: <Blog />
            },
            {
                path: 'blog/posts/:postId', loader: async ({ params }) => {

                    const res = await fetch('/JSON/blog-posts.json');
                    const posts = await res.json();
                    const postId = Number(params.postId);
                    if (Number.isNaN(postId)) {
                        throw new Response("invalid post id", { status: 400 });
                    }

                    const post = posts.find((p) =>
                        p.id === postId);

                    if (!post) {
                        throw new Response('post not found', { status: 404 })
                    }

                    return post;

                }, element: <SinglePost />, HydrateFallback: () => <div className='flex justify-center my-2'><LoadingColors /></div>
            },
            { path: '*', element: <NotFound /> }
        ]
    }
]);

export default router;