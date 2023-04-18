import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Articles from './components/Articles';
import SingleArticleCard from './components/SingleArticleCard'
import ArticleComments from './components/ArticleComments';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticleCard />} />
        {/* <Route path="/articles/:article_id/comments" element={<ArticleComments />} /> */}
      </Routes>
    </div>
  );
}

export default App;
