import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import axios from 'axios';
import Spinner from '../components/Spinner/Spinner';

const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;

const PrivateRoute: React.FC = () => {
    const { isAuthenticated, setIsAuthenticated } = useAuthContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token')
        const verifyToken = async () => {
            try {
                const response = await axios.get(`${BACKEND_API_URL}/api/auth/verify-jwt`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
                );
                if (response.status === 200) {
                    setIsAuthenticated(true);
                }
            } catch (error) {
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        verifyToken();
    }, [setIsAuthenticated]);

    if (loading) return <Spinner/>
    if (!isAuthenticated) return <Navigate to="/login" replace />;
    return <Outlet />;
};

export default PrivateRoute;
