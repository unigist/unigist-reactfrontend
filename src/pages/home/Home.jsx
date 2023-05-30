import './Home.css';

import { Link, Outlet } from 'react-router-dom';

import SideBar from '../../components/sidebar/SideBar';
import PostCard from '../../components/postcard/PostCard';




const Home = (props) => {
    return (
        <section className='container-fluid px-4' id='profile'>
            <div className="row align-items-start">
                <div className="col-2">
                    <SideBar>
                        <Link className="nav-link" to="articles">Article</Link>
                        <Link className="nav-link" to="comments">Comment</Link>
                        <Link className="nav-link" to="stats">Stats</Link>
                    </SideBar>
                </div>
                <div className="col text-center">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
                <div className="col-3">
                    One of three columns
                </div>
            </div>
        </section>
    )
}

export default Home;
