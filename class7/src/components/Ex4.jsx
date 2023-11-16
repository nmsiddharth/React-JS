import React, { Component } from "react";

export default class Ex4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: 1
    }

    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
     alert('ClickHandler Function');
     this.setState({ steps: this.state.steps + 1 });
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="lead my3 p-3 border">
              <p>
                    <b>6) Class component Event Listener/ Binding inside the Constructor</b>
             </p>
             <p>
                We have to call <b>this.setState</b> (for class component) or <b>useState hook</b> (for functional component) to update the state values.
             </p>
                <p><b>Steps :</b> {this.state.steps}</p>
                <button className="btn btn-outline-info" onClick={this.clickHandler}>Ex4 - Click Handler</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
