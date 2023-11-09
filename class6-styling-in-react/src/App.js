import logo from './logo.svg';
import './App.css';
import Inline from './components/inline-style/Inline';
import ObjectStyle1 from './components/object-style/ObjectStyle1';
import ObjectStyle2 from './components/object-style/ObjectStyle2';
import StyledComponent from './components/styled-component/StyledComponent';

function App() {
  return (
  <div>
    <div className="container-fluid">
    <div className="row">
      <div className="col">
        <h1 className="display-3 text-success text-center">
         <b> STYLES IN REACT</b>
          </h1>
          <h2 className='globalClass'>1). Index.css ( Global CSS File : Using CSS Module)</h2>
          <h2 className='appClass'>2). App.css ( App CSS File : Using Parent Component CSS)</h2>
      </div>
    </div>
  </div>
  <Inline/>
  <ObjectStyle1/>
  <ObjectStyle2/>
  <StyledComponent/>
  </div>
  );
}

export default App;
