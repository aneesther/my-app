import React from "react";
// function NumComponent ();
export default function Num() {
    const [num, setNum] = React.useState(10);

    return (
        <div>
            <h1>Hello</h1>

            {num ===0 ? <p>Condition is true</p> : <p>Condition is false</p>}
            <button onClick={() => setNum(!num)}>Toggle Condition</button>
        </div>
    );
}