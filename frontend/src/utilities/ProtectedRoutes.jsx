import { Outlet, Navigate } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from 'react';  

const ProtectedRoutes = () => {
    const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            if (!token) {
                setIsAuthenticated(false);
                return;
            }
            
            try {
                // Assuming you have an endpoint to verify the token
                const response = await axios.get('http://localhost:5000/api/admin/auth', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.status === 200) {
                    setIsAuthenticated(true); // Token is valid
                } else {
                    setIsAuthenticated(false); // Token is invalid
                }
            } catch (err) {
                setIsAuthenticated(false); // Error, invalid token or verification failed
            }
        };

        checkAuth();
    }, [token]);

    // Wait until we have the authentication status
    if (isAuthenticated === null) {
        return <div>Loading...</div>; // Or some other loading indicator
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/admin-login" />;
};

export default ProtectedRoutes;
