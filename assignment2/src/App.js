import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="holder">
            <input type="text" />
            <table>
              <tr>
                <td colSpan={2}>
                  <button>AC</button>
                </td>
                <td> <button>DEL</button></td>
                <td> <button>/</button></td>
              </tr>
              <tr>
                <td><button>7</button></td>
                <td><button>8</button></td>
                <td><button>9</button></td>
                <td><button>*</button></td>
              </tr>
              <tr>
              <td><button>4</button></td>
              <td><button>5</button></td>
              <td><button>6</button></td>
              <td><button>&minus;</button></td>
              </tr>
              <tr>
              <td><button>1</button></td>
              <td><button>2</button></td>
              <td><button>3</button></td>
              <td><button>+</button></td>
              </tr>
              <tr>
              <td><button>0</button></td>
              <td><button>.</button></td>
              <td colSpan={2}><button>=</button></td>
              </tr>
            </table>
           
          </div>
        </div>
      </div>
    )
  }
}
