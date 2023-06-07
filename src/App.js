import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import OvarallLayout from './layout/OverallLayout';
import AuthLayout from './layout/AuthLayout';
import ProtectedRouteLayout from './layout/ProtectedRouteLayout';
import Errors from './components/errors/Errors';

import Home from './pages/home/Home';
// import About from './pages/about/About';
import Account from './pages/account/Account';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import WriteArticle from './pages/writePost/WritePost';
import ArticleDetail from './pages/articleDetail/ArticleDetail';
import Dashboard from './pages/dashboard/Dashboard';
import Acticles from './pages/dashboard/sections/Acticles';
import Comments from './pages/dashboard/sections/Comments';
import Stats from './pages/dashboard/sections/Stats';
import { useEffect } from 'react';


const todayInStr = new Date().toDateString();
const todayInNum = new Date().getDate()

console.log(todayInStr, todayInNum)


function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [articles, setArticles] = useState({posts: []});



    useEffect(() => {
        const articles = localStorage.getItem('UG_articles');
        // const isToken = localStorage.getItem('UG_todays_token');
        if ( articles ) {
            console.log("setting articles")
            setArticles(JSON.parse(articles))
        } else {
            // localStorage.setItem('UG_todays_token', todayInStr);
            fetch('https://dummyjson.com/posts?limit=10')
                .then(res => res.json())
                .then(data => {
                    console.log("fetching")
                    localStorage.setItem('UG_articles', JSON.stringify(data))
                    setArticles(data)
                })
                .catch(err => console.log(err))
        }

    }, [])
    return (
        <div className="App">
      <Routes>
        <Route path='/' element={<OvarallLayout />}>
          <Route path='/' element={<Home articles={articles} />} />
          {/* <Route path='about' element={<About />} /> */}
          <Route path='blog/:blogSlug' element={<ArticleDetail />}/>

        {/* Protected routes */}
        <Route path='dashboard' element={<ProtectedRouteLayout />}>
          <Route path='' element={<Dashboard articles={articles}/>} >
            <Route path='articles' element={<Acticles articles={articles}/>} />
            <Route path='comments' element={<Comments />} />
            <Route path='stats' element={<Stats />} />
          </Route>
          <Route path='/dashboard/write-article' element={<WriteArticle />} />
          <Route path='/dashboard/account' element={<Account />} />
          </Route>
        </Route>

        <Route path='auth/' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register/>} />
        </Route>
        <Route path='*' element={<Errors />} />
      </Routes>
    </div>
  );
}

export default App;
