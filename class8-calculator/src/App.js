import './App.css';

function App() {
  return (
    <section>
      <div>
        <h1>CALCULATOR-PROJECT</h1>
        <input type="text" />
        <table>
          <tr>
            <td colSpan={2}>
                <button>AC</button>
            </td>
            <td>
                <button>DEL</button>
            </td>
            <td>
                <button>&divide;</button>
            </td>
          </tr>
          
          <tr>
            <td>
              <button>7</button>
            </td>
            <td>
              <button>8</button>
            </td>
            <td>
              <button>9</button>
            </td>
            <td>
              <button>&times;</button>
            </td>
          </tr>

          <tr>
            <td>
              <button>4</button>
            </td>
            <td>
              <button>5</button>
            </td>
            <td>
              <button>6</button>
            </td>
            <td>
              <button>&minus;</button>
            </td>
          </tr>

          <tr>
            <td>
              <button>1</button>
            </td>
            <td>
              <button>2</button>
            </td>
            <td>
              <button>3</button>
            </td>
            <td>
              <button>&#43;</button>
            </td>
          </tr>

          <tr>
            <td>
              <button>0</button>
            </td>
            <td>
              <button>&#8226;</button>
            </td>
            <td colSpan={2}>
              <button>=</button>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
}

export default App;
