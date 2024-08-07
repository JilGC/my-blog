import './App.css';

import NavBar from "./NavBar";

import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (


    <BrowserRouter>
      <div className="App">
        <NavBar />

        <div id="page-body">

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>


  );
}

export default App;

// const response = await axios.get('http://localhost:8000/api/articles/learn-react')
// const data = response.data;