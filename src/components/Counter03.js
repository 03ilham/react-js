import React,{useState} from 'react'

export default function Counter03() {
    const [Counter,setCounter] = useState(0)

    const increment =()=>{
        setCounter(Counter+1)
    }

    const decrement =()=>{
        setCounter(Counter-1)
    }

    return (
        <div>
            <h2>Counter With Hook : {Counter}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
