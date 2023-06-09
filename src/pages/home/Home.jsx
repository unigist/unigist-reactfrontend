import './Home.css';

import { Link } from 'react-router-dom';

import SideBar from '../../components/sidebar/SideBar';
import PostCard from '../../components/postcard/PostCard';
import WelcomeBanner from '../../components/banner/WelcomeBanner';




const Home = (props) => {
    console.log(props.articles)
    const { posts } = props.articles;
    return (
        <section className='overflow-hidden container-fluid px-0 m-0' id='profile'>
            <WelcomeBanner className='mb-3' />
            <div className="row align-items-start position-relative">
                <div className="d-none d-lg-flex col-lg-2">
                    <SideBar className="ps-4 w-100">
                        <div id='nav'>
                            <Link className="nav-link py-2" to="/">Home</Link>
                            <Link className="nav-link py-2" to="rewards">Reward</Link>
                            <Link className='nav-link py-2' to="about">About</Link>
                            <Link className="nav-link py-2" to="faq">FAQ</Link>
                        </div>
                        <hr className=''/>
                        <div className='position-sticky top-0' id='tags'>
                            <Link className='nav-link' to={'/'}>tag1</Link>
                            <Link className='nav-link' to={'/'}>tag1</Link>
                            <Link className='nav-link' to={'/'}>tag1</Link>
                            <Link className='nav-link' to={'/'}>tag1</Link>
                            <Link className='nav-link' to={'/'}>tag1</Link>
                        </div>

                    </SideBar>
                </div>
                <div className="col-12 col-md-4  order-md-last">
                    One of three columns
                    this is the section contiant the categories and the
                    trending articles and the most recent articles
                    and the most popular authors
                </div>
                <div className="col-12 col-md col-lg text-center">
                    <div className="filter">

                    </div>
                    {posts.map((art, idx) =>
                       posts &&  <PostCard key={idx} article={art} />
                    )}
                </div>

            </div>
        </section>
    )
}

export default Home;
