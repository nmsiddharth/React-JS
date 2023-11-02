import logo from './logo.svg';
import './App.css';
// import MyComponent from './MyComponent';
import Ex10 from './components/Ex10';

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

   {/* <Ex5 
   img="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D" name="Parent Card" 
   lorem="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ipsum atque tempora officia amet iste qui accusamus libero nostrum excepturi maiores blanditiis adipisci voluptas, non distinctio pariatur totam dignissimos quaerat."/> */}
   
  {/* <Ex6 
   img="https://cdn.pixabay.com/photo/2023/06/20/01/30/ai-generated-8075768_640.jpg" 
   name="Parent Card" 
   lorem="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ipsum atque tempora officia amet iste qui accusamus libero nostrum excepturi maiores blanditiis adipisci voluptas, non distinctio pariatur totam dignissimos quaerat."/>  */}

   {/* <Ex9 
   img="https://cdn.pixabay.com/photo/2023/06/20/01/30/ai-generated-8075768_640.jpg" 
   name="Parent Card" 
   lorem="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ipsum atque tempora officia amet iste qui accusamus libero nostrum excepturi maiores blanditiis adipisci voluptas, non distinctio pariatur totam dignissimos quaerat."/>  */}

  {/* <Ex9 
   img="https://cdn.pixabay.com/photo/2023/06/20/01/30/ai-generated-8075768_640.jpg" 
   name="Parent Card" 
   lorem="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis ipsum atque tempora officia amet iste qui accusamus libero nostrum excepturi maiores blanditiis adipisci voluptas, non distinctio pariatur totam dignissimos quaerat."/>  */}

   <Ex10/>
   </div>
  );
}

export default App;
