import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Articles from './components/Articles';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Routes >
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
