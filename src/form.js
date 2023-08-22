import React, {useState} from 'react';

function Form() {
    const [input, setInput] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        console.log("You clicked submit.");
        console.log(input);
    }
    function handleChange(e) {
        setInput(e.target.value);
        console.log("target value", e.target.value);
        console.log("state input", input);
    }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder='Type Something'
            value={input}
            onChange={handleChange}
            />
            <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form

