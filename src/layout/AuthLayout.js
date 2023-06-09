import { Link, Outlet } from "react-router-dom";

import './AuthLayout.css';

const AuthLayout = (props) => {


    return (
        <article className="row" id="auth-page">
            <section className="col-12 col-sm p-5 col-md" id="graphic">
                <h1 className='display-5 text-center'>Welcoming you to
                    <Link to='/' className="text-decoration-none link-info " > Unigist </Link>
                </h1>

            </section>
            <section className="col-12 col-sm-7 col-md p-5 bg-info rounded h-100" id="login">
                    <Outlet />
            </section>
        </article>
    )
}

export default AuthLayout;
