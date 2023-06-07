import './Dashboard.css';


import SideBar from '../../components/sidebar/SideBar';
import Banner from '../../components/banner/Banner';

import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    let user = JSON.parse(localStorage.getItem('user'));

    return (
        <section className='container-fluid px-4' id='profile'>
            <div className="row align-items-start">
                <div className="col-2">
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
                <div className="col text-center">
                    <Banner username={ user?.username } img={ user?.image }/>

                    <Outlet />
                </div>
                <div className="col-3">
                    One of three columns
                </div>
            </div>
        </section>
    )
}

export default Dashboard;
