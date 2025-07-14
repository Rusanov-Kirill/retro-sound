import { Navigate, useRoutes } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';

const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: '/home',
            element: (
                <HomePage />
            ),
            index: true,
        },
        {
            path: '*',
            element: <Navigate to="/home" replace />,
        },
    ]);

    return routes;
};

export default AppRoutes;
