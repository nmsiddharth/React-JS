import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';
import Pnf from './components/Pnf';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <ToastContainer autoClose={4000} position={'top-right'}/>
      <Routes>
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/register"} element={<Register/>} />
        <Route path={"/*"} element={<Pnf/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
