import './stylesheets/App.css';
import {useState} from "react";
import Cars from './Pages/cars';
import Phones from './Pages/phones';

function App() {

  return (
    <div className="App">

      <Cars />

      <Phones />

    </div>
  );
}

export default App;
