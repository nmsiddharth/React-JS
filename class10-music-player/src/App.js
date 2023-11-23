import React from 'react';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Music from './components/Music';
import Contact from './components/Contact';
import Track from './components/Track';
import Pnf from './components/Pnf';

function App() {
  return (
   <BrowserRouter>
   <Menu/>
   <Routes>
    <Route path={"/"}element={<Music />} />
    <Route path={"/contact"} element={<Contact />} />
    <Route path={"/track/:artistId"} element={<Track />} />
    <Route path={"/*"} element={<Pnf />} />
   </Routes>
    </BrowserRouter>
  );
}

export default App;
