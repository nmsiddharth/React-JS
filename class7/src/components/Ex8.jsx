import React, { Component, Fragment } from 'react'

export default class Ex8 extends Component {
    constructor(props) {
      super(props);
    }

    printMessage(){
        console.log("This is a message");
    }
    showAlert(){
        alert('Hello World');
    }
    clickHandler(){
      this.printMessage();
      this.showAlert();
    }

    render() {
      return (
        <Fragment>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="lead my3 p-3 border">
                  <p>
                    <b>
                      10) Call multiple functions inside an onClick event handler
                    </b>
                  </p>
                  <button className="btn btn-outline-info" onClick={this.clickHandler.bind(this)}>Ex8 - Click Handler</button>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
  }
