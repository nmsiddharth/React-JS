import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      result: ""
    }
  }

  click(a){
    this.setState({result:this.state.result.concat(a.target.value)})
  }

  clear(){
    this.setState({result:""})
  }

  delete(){
   this.setState({result:this.state.result.slice(0,-1)});
  }

  calculate(){
    try {
      this.setState({
        result:eval(this.state.result).toString()
      });
    } catch (error) {
      this.setState({result:"error"});
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="holder">
            <h1>CALCULATOR</h1>
            <input type="text" value={this.state.result}/>
            <table>
              <tr>
                <td colSpan={2}>
                  <button onClick={this.clear.bind(this)}>AC</button>
                </td>
                <td> <button onClick={this.delete.bind(this)}>DEL</button></td>
                <td> <button onClick={this.click.bind(this)} value={"/"}>&divide;</button></td>
              </tr>
              <tr>
                <td><button onClick={this.click.bind(this)} value={"7"}>7</button></td>
                <td><button onClick={this.click.bind(this)} value={"8"}>8</button></td>
                <td><button onClick={this.click.bind(this)} value={"9"}>9</button></td>
                <td><button onClick={this.click.bind(this)} value={"*"}>x</button></td>
              </tr>
              <tr>
              <td><button onClick={this.click.bind(this)} value={"4"}>4</button></td>
              <td><button onClick={this.click.bind(this)} value={"5"}>5</button></td>
              <td><button onClick={this.click.bind(this)} value={"6"}>6</button></td>
              <td><button onClick={this.click.bind(this)} value={"-"}>&minus;</button></td>
              </tr>
              <tr>
              <td><button onClick={this.click.bind(this)} value={"1"}>1</button></td>
              <td><button onClick={this.click.bind(this)} value={"2"}>2</button></td>
              <td><button onClick={this.click.bind(this)} value={"3"}>3</button></td>
              <td><button onClick={this.click.bind(this)} value={"+"}>+</button></td>
              </tr>
              <tr>
              <td><button onClick={this.click.bind(this)} value={"0"}>0</button></td>
              <td><button onClick={this.click.bind(this)} value={"."}>.</button></td>
              <td colSpan={2}><button onClick={this.calculate.bind(this)}>=</button></td>
              </tr>
            </table>
           
          </div>
        </div>
      </div>
    )
  }
}
