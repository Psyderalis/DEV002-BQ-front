import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, userRol }) => {
    if (!userRol) {
        return <Navigate to='/' />
    };
    return children
};

export default ProtectedRoute;