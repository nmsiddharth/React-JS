
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Addition from './components/Addition';
import Subtraction from './components/Subtraction';
import Multiplication from './components/Multiplication';
import Divison from './components/Divison';
import Exponent from './components/Exponent';
import Pnf from './components/Pnf';
import Modulo from './components/Modulo';

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path='/addition' element={<Addition></Addition>}></Route>
        <Route path='/subtraction' element={<Subtraction></Subtraction>}></Route>
        <Route path='/multiplication' element={<Multiplication></Multiplication>}></Route>
        <Route path='/divison' element={<Divison></Divison>}></Route>
        <Route path='/exponent' element={<Exponent></Exponent>}></Route>
        <Route path={'/*'} element={<Pnf/>}/>
        <Route path={'/modulo'} element={<Modulo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;