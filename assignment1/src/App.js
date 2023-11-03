import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col">
      <Header/>
     <Content/>
     <Footer/>
      </div>
    </div>
    </div>
  );
}

export default App;
