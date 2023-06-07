// Note: Protected Route Layout
//       - Route Layout for Protected Routes
//  if a token exit in localStorage, then render the Outlet
//  else redirect to login page

import { Navigate, Outlet } from "react-router-dom";


const ProtectedRouteLayout = () => {
    const token = localStorage.getItem('token')
    console.log(token);

    return (
        <>
            {
                token ? <Outlet /> : <Navigate to='/auth/login' />
            }
        </>
    )
}

export default ProtectedRouteLayout;
