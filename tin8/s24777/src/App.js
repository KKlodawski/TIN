import logo from './logo.svg';
import './stylesheets/App.css';
import {useState} from "react";

function App() {

  const [objects, editObject]  = useState([
    {val1: "a", val2: "a"},
    {val1: "b", val2: "b"},
    {val1: "c", val2: "c"}
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <table>
          {objects.map(obj =>
            <tr>
              <td>{obj.val1}</td>
              <td>{obj.val2}</td>
            </tr>
          )}
        </table>
      </header>
    </div>
  );
}

export default App;
