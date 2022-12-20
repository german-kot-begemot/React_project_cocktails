import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Coctails from './components/Coctails/Coctails';
import Trends from './components/Trends/Trends';
import BarMusic from './components/BarMusic/BarMusic';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import PostDetails from './components/Trends/PostDetails/PostDetails';
import MyBar from './components/MyBar/MyBar';

function App() {
  return (
    <div data-testid="app" className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coctails" element={<Coctails />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/barmusic" element={<BarMusic />} />
        <Route path="/news" element={<News />} />
        <Route path="/mybar" element={<MyBar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/trends/postdetails" element={<PostDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
