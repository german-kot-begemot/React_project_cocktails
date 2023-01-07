import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Cocktails from './components/Cocktails/Cocktails';
import Trends from './components/Trends/Trends';
import Humor from './components/Humor/Humor';
import MyBar from './components/MyBar/MyBar';
import PostDetails from './components/Trends/PostDetails/PostDetails';
import CardDetails from './components/Cocktails/CardDetails/CardDetails';

// import News from './components/Events/Events';
// import Profile from './components/Profile/Profile';
// import Settings from './components/Messages/Messages';

function App() {
  return (
    <div data-testid="app" className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/humor" element={<Humor />} />
        <Route path="/mybar" element={<MyBar />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/trends/postdetails" element={<PostDetails />} />
        <Route path="/cocktails/:id" element={<CardDetails />} />

        {/* <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />*/}
      </Routes>
    </div>
  );
}

export default App;
