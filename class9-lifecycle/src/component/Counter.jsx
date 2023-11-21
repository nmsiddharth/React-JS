import React, { Component, Fragment } from 'react';
import  ReactDOM  from 'react-dom';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive : false
    };
  }
  componentWillMount(){
    console.log('component will mount');
  }
  componentDidMount(){
    console.log('component did mount');
  }

  // deprecated
  componentWillReceiveProps(nP, nC){
    console.log("Comonent will recieve props");
    console.log("New props = ",nP);  // nP = new Props value (user defined)
    console.log("New state = ",nC);

    if(nP.counterProps >= 10){
      this.setState({
        isActive: true
      })
    }
  }

  // Decision Maker
  shouldComponentUpdate(nP, nS){
    console.log("Should component update");
    console.log("New props = ",nP);  
    console.log("New state = ",nS);  
    return true;
  }

    // deprecated
    componentWillUpdate(nP, nS){
      console.log("component will update");
      console.log("New props = ",nP);  
      console.log("New state = ",nS);  
    }

  // User-defined method
  updateCounter(){
    ReactDOM.render(
      <React.StrictMode>
        <Counter counterProps = {this.props.counterProps + 1}/>
      </React.StrictMode>,
      document.getElementById("renderHere")
    );
  }
  render(){
    console.log('This is render method');
    return(
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className='text-primary text-center'>Counter</h1>
              <hr />
            </div>
          </div>
          <div className="row">
              <div className="col">
              <h1>{this.props.counterProps}</h1>
              <div className="lead border p-3 text-center">
                {
                  this.state.isActive ? <h1 className="text-success">Welcome to Lifecycle Method</h1> : (
                    <div>
                      <h1 className='text-secondary'>Need more counts</h1>
                      <button className="btn btn-outline-warning" onClick={this.updateCounter.bind(this)}>Update Props value</button>
                    </div>
                  )
                }
              </div>
         
              </div>
          </div>
        
        </div>
       </Fragment> 
    );
  }

  componentDidUpdate(oP, oS){
    console.log("component did update");
    console.log("Old props = ",oP);  
    console.log("Old state = ",oS);  
  }

  componentWillUnmount(){
    console.log("Component successfully unmounted")
  }



}

export default Counter;
