import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ShopPage from '../pages/ShopPage/ShopPage';

export const router = createBrowserRouter([
    { path: "/", element: < HomePage />},
    { path: "/shop", element: < ShopPage/>},

])