import React, {useState} from "react";

function Contador()
{
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0)
            setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <h2>Contador: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Contador