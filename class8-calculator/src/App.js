import './App.css';
import {useState} from "react";

function App() {

  const [result, setResult] = useState("");
  
  const handleClick = (a) => {   
    setResult(result.concat(a.target.value));
  };

  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleDelete = () => {
    setResult(result.slice(0,-1));
  };

  return (
    <section>
      <div>
        <h1>CALCULATOR-PROJECT</h1>
        <input type="text" value={result} />
        <table>
          <tr>
            <td colSpan={2}>
                <button onClick={clear}>AC</button>
            </td>
            <td>
                <button onClick={handleDelete}>DEL</button>
            </td>
            <td>
                <button value={"/"} onClick={handleClick}>&divide;</button>
            </td>
          </tr>
          
          <tr>
            <td>
              <button value={"7"} onClick={handleClick}>7</button>
            </td>
            <td>
              <button value={"8"} onClick={handleClick}>8</button>
            </td>
            <td>
              <button value={"9"} onClick={handleClick}>9</button>
            </td>
            <td>
              <button value={"*"} onClick={handleClick}>&times;</button>
            </td>
          </tr>

          <tr>
            <td>
              <button value={"4"} onClick={handleClick}>4</button>
            </td>
            <td>
              <button value={"5"} onClick={handleClick}>5</button>
            </td>
            <td>
              <button value={"6"} onClick={handleClick}>6</button>
            </td>
            <td>
              <button value={"-"} onClick={handleClick}>&minus;</button>
            </td>
          </tr>

          <tr>
            <td>
              <button value={"1"} onClick={handleClick}>1</button>
            </td>
            <td>
              <button value={"2"} onClick={handleClick}>2</button>
            </td>
            <td>
              <button value={"3"} onClick={handleClick}>3</button>
            </td>
            <td>
              <button value={"+"} onClick={handleClick}>&#43;</button>
            </td>
          </tr>

          <tr>
            <td>
              <button value={"0"} onClick={handleClick}>0</button>
            </td>
            <td>
              <button value={"."} onClick={handleClick}>&#8226;</button>
            </td>
            <td colSpan={2}>
              <button onClick={calculate}>=</button>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
}

export default App;
