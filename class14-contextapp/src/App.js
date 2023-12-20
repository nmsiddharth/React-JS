import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Users from './components/Users';
import Pnf from './components/Pnf';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <ToastContainer autoClose={4000} position={'top-right'} />
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/users'} element={<Users/>} />
        <Route path={'/*'} element={<Pnf/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
