import './Header.css';

import { useEffect, useState } from 'react';
import { Link, Navigate } from "react-router-dom";


const Header = () => {
    const [t, setT ] = useState(false);
    const token = localStorage.getItem('token') ? true : false;

    const logout = (e) => {
        localStorage.clear();
        setT(!t);
    }

    useEffect(() => {
        return (() => {
            setT(false)
        })
    }, [token])

    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light px-4">
            <div className="container-fluid ">
                <Link className="navbar-brand" to="/">Unigist</Link>
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <form className="d-none align-items-start">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="blog-search" />
                            <span className="input-group-text" id="blog-search">Q</span>
                        </div>
                    </form>

                <span className='d-flex align-items-center'>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">My home</Link>
                            </li>
                            {
                            !token ?

                                <li className="nav-item">
                                    <Link className="nav-link" to="/auth/login">login</Link>
                                </li>
                            :
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className='bi bi-person-fill-gear' />
                                    </Link>
                                    <ul className="dropdown-menu  position-absolute" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/dashboard/account">Settings</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li>
                                            <button onClick={logout} className="dropdown-item">Logout</button>
                                            { t && <Navigate to='/' replace />}
                                        </li>
                                    </ul>
                                </li>
                            }
                        </ul>
                    </div>
                </span>
            </div>
        </nav>
    )
}

export default Header;
