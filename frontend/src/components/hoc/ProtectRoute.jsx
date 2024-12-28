import React from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../utilities/Auth'; // Utility to check auth

const ProtectRoute = ({ children }) => {
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/admin-login'); // Redirect to login if not authenticated
        }
    }, [navigate]);

    return isAuthenticated() ? children : null;
};

export default ProtectRoute;
