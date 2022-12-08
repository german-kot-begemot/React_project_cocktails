import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Navbar/Home/Home';
import Coctails from './components/Navbar/Coctails/Coctails';
import BarmenPost from './components/Navbar/BarmenPost/BarmenPost';
import BarMusic from './components/Navbar/BarMusic/BarMusic';
import News from './components/Navbar/News/News';
import Profile from './components/Navbar/Profile/Profile';
import Settings from './components/Navbar/Settings/Settings';

function App() {
  return (
    <div data-testid="app" className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coctails" element={<Coctails />} />
        <Route path="/barmenpost" element={<BarmenPost />} />
        <Route path="/barmusic" element={<BarMusic />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
