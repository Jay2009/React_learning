import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);


    const [count, setCount] = useState(0);

const onClick = () => {
    setCount(count+ 1);
    setCount(count+ 1);
    console.dir(count);
}

// 아래 코드는 위의 코드와 다르게 배치로 처리하여
const onClickSecond = () => {
    setCount(count=> count+ 1);
    setCount(count=> count+ 1);
    console.dir(count);
}




    const onIncrease = () => {
        setNumber(prevNumber => prevNumber +1);
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber -1);
    }
    return (
        <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={onClick}>check</button>
        <button onClick={onClickSecond}>check</button>
        </div>
    );
}




export default Counter;
