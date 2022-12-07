import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
// import NotFound from './components/NotFound/NotFound';
import './App.scss';

function App() {
  return (
    <div data-testid="app" className="App">
      <Header />
      <Navbar />
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
