import React, { Component, Fragment } from "react";
import Counter from "./component/Counter";
import  ReactDOM  from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "Sid"
    }
  }

  mount(){
    ReactDOM.render(
      <React.StrictMode>
        <Counter counterProps = {this.state.name}/>
      </React.StrictMode>,
      document.getElementById("renderHere")
    );
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-3 text-success text-center">LIFECYLCE</h1>
              <p>{this.state.name}</p>
              <hr/>
            </div>
          </div>
          <div className="row my-3">
            <div className="col">
              <button className="btn btn-outline-success" onClick={this.mount.bind(this)}>Mount</button>
              <button className="btn btn-outline-danger float-end">
                UnMount
              </button>
              <hr/>
            </div>
          </div>
        </div>
        <section id="renderHere"></section>
      </Fragment>
    );
  }
}

export default App;
