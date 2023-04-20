import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Articles from './components/Articles';
import SingleArticleCard from './components/SingleArticleCard'
import Navbar from './components/NavBar';
import Topics from './components/Topics';
import SingleTopicCard from './components/SingleTopicCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticleCard />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic_slug" element={<SingleTopicCard />} />
      </Routes>
    </div>
  );
}

export default App;
