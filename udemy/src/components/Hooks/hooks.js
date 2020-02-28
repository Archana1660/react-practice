import React, { useState } from 'react';

const AppHooks = (props) => {

    let [count, setCount] = useState(props.count);
    let [text, setText] = useState('');

    const increment = () => setCount(count+1);
    
    const decrement = () => setCount(count-1);

    const reset = () => setCount(0);
    
    const theText = (e) => setText(e.target.value);

    return(
        <div>
            <p>For {text} count: {count}</p>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button><br></br>
            <input value={text} onChange={theText}/>
        </div>
    )
}

export default AppHooks;