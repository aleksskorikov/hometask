import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <>
            <div>Count { count }</div>
        <button onClick={increment}>Додати</button>
        <button onClick={decrement}>Відняти</button>
        </>
    )
}

export default Counter