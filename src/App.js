import React, { useState } from 'react';
import './App.css';
import State from "./State";
import Condition from './condition';
import Form from './form';
// import ClassComponent from "./class.js";
// import  FunctionalComponent from "./func";
// import ListboxComponent  from "./list";
// import "./list.css";

function App() {
  const [num, setNum] = useState(1);
  const [message, setMessage] = React.useState(1);
  function changeNum() {
    if (num === 0) {
      setNum(1);
    } else {
      setNum(0);
    }
    setMessage(!message);
  }
  return (
    <div className='App'>
      <Form/>
       {num === 0 ? <State /> : <Condition />}
            {/* <button onClick={() => State (!num)}>Toggle Condition</button>
      {/* <ClassComponent/>
      <FunctionalComponent name="Funky" age="12"/> */}
      {/* <ListboxComponent itemA="Sweet" itemB="Ripe" itemC="Oranges" itemD="Forbidden" /> */}
    </div>
  );
}

export default App;

