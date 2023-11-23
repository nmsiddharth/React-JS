import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Addition from './components/Addition';
import Subtraction from './components/Subtraction';
import Multiplication from './components/Multiplication';
import Division from './components/Division';
import Modulo from './components/Modulo';
import Pnf from './components/Pnf';
import Home from './components/Home';


function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path={'/'} element={<Home/>}/>
    <Route path={'/addition'} element={<Addition/>}/>
    <Route path={'/subtraction'} element={<Subtraction/>}/>
    <Route path={'/multiplication'} element={<Multiplication/>}/>
    <Route path={'/division'} element={<Division/>}/>
    <Route path={'/modulo'} element={<Modulo/>}/>
    <Route path={'/*'} element={<Pnf/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
