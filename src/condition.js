import React from "react";
export default function Condition() {
    const [condition, setCondition] = React.useState(true);

    return (
        <div>
            <h1>Hello</h1>

            {condition ? <p>Condition is true</p> : <p>Condition is false</p>}
            <button onClick={() => setCondition(!condition)}>Toggle Condition</button>
        </div>
    );
}

// create a state for num
// create a button and pass handler and function
// your function should change num such that our app returns something different on each toggle