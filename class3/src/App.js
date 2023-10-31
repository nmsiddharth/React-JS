import logo from './logo.svg';
import './App.css';
// import MyComponent from './MyComponent';
import Ex4 from './components/Ex4';

function App() {
  return (
   <div className="container">
    <div className="row">
      <div className="col">
        <h1 className='bg-primary p-3 text-center'>This is App Component..! (Parent Component)</h1>
      </div>
    </div>
    {/* <MyComponent></MyComponent> */}
    {/* <MyComponent/> */}

   <Ex4/>

   </div>
  );
}

export default App;
