import React, { useState } from 'react'

const CounterAppAdvance = () => {

    const [counter, setCounter] = useState(0);
    const decrement = () => {
        setCounter(counter - 2);
    };
    const increment = () => {
        setCounter(counter + 2);
    };

    return (
        <main>

            <button onClick={decrement}>Decrement</button>
            {counter}
            <button onClick={increment}>Increment</button>
        </main>
    )
}


export default CounterAppAdvance