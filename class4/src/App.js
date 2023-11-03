import UserComponent from './components/UserComponent';
import users from './data/users';


function App() {
  console.log(users);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="bg-success text-center text-white p-3 rounded shadow">
          <h1>Functional Component Props</h1>
          </div>
        </div>
      </div>  
      <UserComponent userdata ={users}/>    
    </div>
  );
}

export default App;
