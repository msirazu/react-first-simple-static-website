import { createBrowserRouter } from 'react-router-dom'
import Root from "./Root";
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Blog from '../pages/Blog/Blog';
import LoadingColors from '../components/Loader/LoadingColors';
import SinglePost from '../pages/Blog/SinglePost';

const router = createBrowserRouter([
    {path: '/', element: <Root />, children: [
        {index: true, element: <Home />},
        {path: '/about', element: <About />},
        {path: '/contact', element: <Contact />},
        {path: '/blog', loader: async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            return res.json();
        }, HydrateFallback: () => <div className='flex justify-center my-2'><LoadingColors /></div>, element: <Blog />},
        {path: 'blog/posts/:postId', loader: async({params}) => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
            return res.json();
        }, element: <SinglePost/>, HydrateFallback: () => <div className='flex justify-center my-2'><LoadingColors /></div>}
    ]}
]);

export default router;