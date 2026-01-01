import { createBrowserRouter } from 'react-router-dom'
import Root from "./Root";
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Blog from '../pages/Blog/Blog';

const router = createBrowserRouter([
    {path: '/', element: <Root />, children: [
        {index: true, element: <Home />},
        {path: '/about', element: <About />},
        {path: '/contact', element: <Contact />},
        {path: '/blog', element: <Blog />},
    ]}
]);

export default router;