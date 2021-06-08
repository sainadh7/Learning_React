import React from "react";

export function Counter(){
    let [counter,setCounter] = React.useState(0);

    function increment(){
        setCounter(++counter);
    }
    function decrement(){
        setCounter(--counter);
    }
    return(
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}