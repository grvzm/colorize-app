import { useState } from "react";

const Counter = () =>{
    const [counter,setCounter] = useState(()=>Math.floor(Math.random()*16));
    const incrBy2 =()=>{
        console.log('incrBy2');
        setCounter(counter +2);
        setCounter((prev)=> prev+2);
    };
    return (
        <div>
            <div className="counter-box">
                <span>{counter}</span>
                <button onClick={incrBy2}>+2</button>
            </div>
        </div>
    );
}

export default Counter;