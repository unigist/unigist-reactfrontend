import './Dashboard.css';

import { useState, useEffect } from 'react';

import SideBar from '../../components/sidebar/SideBar';
import Banner from '../../components/banner/Banner';
import PostCard from '../../components/postcard/PostCard';

import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    // console.log(user);

    const [userBlogpost, setUserBlogpost] = useState([]);

    useEffect(() => {
        let articles = JSON.parse(localStorage.getItem('userBlogpost'));

        if (articles) {
            console.log('using fetched ')
            setUserBlogpost(articles);
            console.log(articles);
        } else {
            const fetchArticles = async () => {
                console.log('fetching articles, dashboard')
                try {
                    const response = await fetch(`https://dummyjson.com/posts/user/${user.id}?limit=6`);
                    const data = await response.json();
                    // for learing purpose
                    if (data?.message) {
                        throw new Error(data.message);
                    }
                    setUserBlogpost(data.posts);
                    localStorage.setItem('userBlogpost', JSON.stringify(data.posts));

                } catch (error) {
                    console.log(error);
                }
            }
            fetchArticles();
        }

        return () => {
            console.log('component unmounted');

        }
    }, []);


    return (
        <section className='container-fluid px-4' id='profile'>
            <div className="row align-items-start">
                <div className="col-2">
                    <SideBar>
                        <Link className="nav-link" to="articles">
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

                    <nav className='mx-3'>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link"
                                     id="home-tab"
                                     data-bs-toggle="tab"
                                     data-bs-target="#most-viewed"
                                     type="button" role="tab"
                                     aria-controls="home"
                                     aria-selected="true"
                                >
                                    Most Viewed
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#recent" type="button" role="tab" aria-controls="profile" aria-selected="false">Recents</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#draft" type="button" role="tab" aria-controls="contact" aria-selected="false">Drafts</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            {/* <div className="tab-pane fade" id="most-viewed" role="tabpanel" aria-labelledby="most-viewed-tab">
                                This is a large text.
                                Sublime Text includes an auto-upgrade mechanism on Windows and Mac to make upgrades a snap. Instead of going against the grain of the Linux ecosystem, packages and package repositories are provided for most of the major distributions.
                            </div> */}
                            <div className="tab-pane fade show active" id="recent" role="tabpanel" aria-labelledby="recent-tab">
                            {
                                userBlogpost.map((article, index) => (
                                    <PostCard key={index} article={article} />
                                ))
                            }
                            </div>
                            {/* <div className="tab-pane fade" id="draft" role="tabpanel" aria-labelledby="draft-tab">

                            </div> */}
                        </div>
                    </nav>
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
