import './Dashboard.css';


import SideBar from '../../components/sidebar/SideBar';
import Banner from '../../components/banner/Banner';

import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    let user = JSON.parse(localStorage.getItem('user'));

    return (
        <section className='container-fluid px-4' id='profile'>
            <div className="row align-items-start">
                <div className="d-none d-lg-block col-lg-1 me-5 mt-3">
                    <SideBar>
                        <Link className="nav-link" to="">
                            Article
                        </Link>
                        <Link className="nav-link" to="comments">
                            Comment
                        </Link>
                        <Link className="nav-link" to="stats">
                            Stats
                        </Link>
                    </SideBar>
                </div>
                <div className="col-12 col-md  text-center">
                    <Banner username={ user?.username } img={ user?.image }/>

                    <Outlet />
                </div>
                <div className="d-none d-md-flex col-md-4">
                    One of three columns
                </div>
            </div>
        </section>
    )
}

export default Dashboard;
