import React, { Component, Fragment } from 'react';

class Counter extends Component {
  componentWillMount(){
    console.log('component will mount');
  }
  componentDidMount(){
    console.log('component did mount');
  }

  render(){
    console.log('This is render method');
    return(
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className='text-primary text-center'>Counter</h1>
              <p>{this.props.counterProps}</p>
            </div>
          </div>
        </div>
       </Fragment> 
    );
  }
}

export default Counter;
