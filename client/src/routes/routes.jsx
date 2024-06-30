import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import PageNotFound from '../pages/404Page/PageNotFound';
import ShopPage from '../pages/ShopPage/ShopPage';

export const router = createBrowserRouter([
    { path: "/", element: < HomePage />},
    { path: "/shop", element: < ShopPage/>},
    { path: "*", element: < PageNotFound/>},

])