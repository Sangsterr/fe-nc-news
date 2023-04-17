import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Articles from './components/Articles';
import SingleArticleCard from './components/SingleArticleCard'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticleCard />} />
      </Routes>
    </div>
  );
}

export default App;
