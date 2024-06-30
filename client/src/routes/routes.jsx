import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import HomePage from '../pages/HomePage/HomePage';
import PageNotFound from '../pages/404Page/PageNotFound';

export const router = createBrowserRouter([
    { path: "/", element: < HomePage />},
    { path: "/shop", element: < Header/>},
    { path: "*", element: < PageNotFound/>},

])