import React, {useState} from 'react'

const UsestateExampleOne = () => {
    const [count, setCount] = useState(0)

    const handleIncrementCountClick = () => {
        setCount(prevcount => prevcount+1);
        setCount(prevcount => prevcount+1);
    }

    const handleDecrementCountClick = () => {
        setCount(count-1);        
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrementCountClick}>Increment count</button>
            <br />
            <button onClick={handleDecrementCountClick}>Decrement count</button>
        </>
    )
}

export default UsestateExampleOne