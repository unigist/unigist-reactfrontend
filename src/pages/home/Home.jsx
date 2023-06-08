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
                <div className="d-none d-lg-flex col-lg-1 me-5 mt-3">
                    <SideBar>
                        <Link className="nav-link" to="articles">Article</Link>
                        <Link className="nav-link" to="comments">Comment</Link>
                        <Link className="nav-link" to="stats">Stats</Link>
                    </SideBar>
                </div>
                <div className="col-12 col-md-4  order-md-last">
                    One of three columns
                    this is the section contiant the categories and the
                    trending articles and the most recent articles
                    and the most popular authors
                </div>
                <div className="col-12 col-md col-lg text-center">
                    {posts.map((art, idx) =>
                       posts &&  <PostCard key={idx} article={art} />
                    )}

                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatum est saepe magnam aliquam asperiores doloremque aspernatur ipsam, sunt quas dolore iusto reiciendis adipisci. Veritatis inventore atque voluptate at adipisci.
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home;
