import './Home.css';

import { Link } from 'react-router-dom';

import SideBar from '../../components/sidebar/SideBar';
import PostCard from '../../components/postcard/PostCard';




const Home = (props) => {
    console.log(props.articles)
    const { posts } = props.articles;
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
                    {posts.map((art, idx) =>
                       posts &&  <PostCard key={idx} article={art} />
                    )}
                </div>
                <div className="col-4">
                    One of three columns
                </div>
            </div>
        </section>
    )
}

export default Home;
