import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import HomePage from '../pages/HomePage/HomePage';

export const router = createBrowserRouter([
    { path: "/", element: < HomePage />},
    { path: "/shop", element: < Header/>},

])