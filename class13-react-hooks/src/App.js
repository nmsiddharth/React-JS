import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import Ex3 from './components/Ex3';
import Ex4 from './components/Ex4';
import Ex5 from './components/Ex5';
import Ex6 from './components/Ex6';
import Ex7 from './components/Ex7';
import Ex8 from './components/Ex8';
import Pnf from './components/Pnf';

function App() {
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/" element={<Ex1 />}></Route>
        <Route path="/ex1" element={<Ex1 />}></Route>
        <Route path="/ex2" element={<Ex2 />}></Route>
        <Route path="/ex3" element={<Ex3 itemsPerPage={10} />}></Route>
        <Route path="/ex4" element={<Ex4 />}></Route>
        <Route path="/ex5" element={<Ex5 />}></Route>
        <Route path="/ex6" element={<Ex6 />}></Route>
        <Route path="/ex7" element={<Ex7 />}></Route>
        <Route path="/ex8" element={<Ex8 />}></Route>
        <Route path="/*" element={<Pnf />}></Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
