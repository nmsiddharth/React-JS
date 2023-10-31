import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';

function App() {
  return (
   <div className="container">
    <div className="row">
      <div className="col">
        <h1>This is App Component..! (Parent Component)</h1>
      </div>
    </div>
    {/* <MyComponent></MyComponent> */}
    <MyComponent/>
   </div>
  );
}

export default App;
