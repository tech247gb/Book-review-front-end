import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const PublicRoute: React.FC = () => {
    const { isAuthenticated } = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to="/user/view-reviews" replace />;
    }

    return <Outlet />;
};

export default PublicRoute;
