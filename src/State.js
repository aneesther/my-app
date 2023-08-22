import React, { useState } from 'react';
import "./App.css";
export default function State() {
    const [count, setCount] = useState(10);
    const [name, setName] = useState("Ekene");
    function handleClick() {
        setName("Joe");
    }
    function addToCount() {
        setCount (count + 1);
    }
    function subFromCount() {
        setCount(count - 1);
    }
    return (
        <div className='center'>
            <div className='flex'>
                <p className='box' onClick={subFromCount}>
                    -
                </p>
                <p>{count}</p>
                <p className='box' onClick={addToCount}>
                    +
                </p>
            </div>
            <p>{name}</p> <div onClick={handleClick}>Click me</div>
        </div>
    );
}

