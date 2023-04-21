import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Articles from './components/Articles';
import SingleArticleCard from './components/SingleArticleCard'
import Navbar from './components/NavBar';
import Topics from './components/Topics';
import SingleTopicCard from './components/SingleTopicCard';
import { useState } from 'react';
import Users from './components/Users';
import NotFound from './components/NotFound';

function App() {
  const [user, setUser] = useState("");
  const [userAvatar, setUserAvatar] = useState("https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png?f=avif&w=256")

  return (
    <div className="App">
      <Navbar userAvatar={userAvatar} />
      <Header user={user} />
      <Routes >
        <Route path="/" element={<Home user={user} />} />
        <Route path="/articles" element={<Articles user={user} />} />
        <Route path="/articles/:article_id" element={<SingleArticleCard user={user} />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic_slug" element={<SingleTopicCard />} />
        <Route path="/users" element={<Users setUser={setUser} setUserAvatar={setUserAvatar} />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

    </div>
  );
}

export default App;


// comments={comments}
//           setArticle={setArticle}
//           article={article}