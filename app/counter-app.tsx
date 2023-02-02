import React, { useState } from 'react'

const CounterApp = () => {

    const [counter, setCounter] = useState(0);
    const decrement = () => {
        setCounter(counter - 1);
    };
    const increment = () => {
        setCounter(counter + 1);
    };

    return (
        <main>
            <button onClick={decrement}>Decrement</button>
            {counter}
            <button onClick={increment}>Increment</button>
        </main>
    )
}

export default CounterApp