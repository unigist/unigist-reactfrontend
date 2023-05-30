import './App.css';
import { Route, Routes } from 'react-router-dom';

import OvarallLayout from './layout/OverallLayout';
import RegistrationLayout from './layout/RegistrationLayout';
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




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<OvarallLayout />}>
          <Route path='/' element={<Home />} />
          {/* <Route path='about' element={<About />} /> */}
          <Route path='blog/:blogSlug' element={<ArticleDetail />}/>

          <Route path='dashboard' element={<Dashboard />} >
            <Route path='articles' element={<Acticles />} />
            <Route path='comments' element={<Comments />} />
            <Route path='stats' element={<Stats />} />
          </Route>
          <Route path='/dashboard/write-article' element={<WriteArticle />} />
          <Route path='/dashboard/account' element={<Account />} />
        </Route>
        <Route path='auth/' element={<RegistrationLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register/>} />
        </Route>
        <Route path='*' element={<Errors />} />
      </Routes>
    </div>
  );
}

export default App;
