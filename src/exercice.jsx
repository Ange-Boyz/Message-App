/*import React, { useState } from "react";
function Counter(){
    const [count, setCount]=useState(0);
    return(
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=> setCount(count+1)}> Click me</button>
        </div>
    )\
}

export default <Counter>

import { useEffect, useState } from "react";

function Timer () {

    const [count, setCount] = useState(0);
  
    useEffect(()=>{
        const interval = setInterval(()=>setCount(count+1),1000);
        return ()=>clearInterval(interval);
    }, [count]);
    return <h1 className="text-4xl font-bold">count: {count}</h1>
}

export default Timer;

import { useContext, createContext } from "react";

const userContext = createContext();

export function UserProfile() {
    const user = useContext(userContext)
    return <h1 className="text-3xl font-bold">Welcome, {user.name}!</h1>
}

export function Appli() {
    const user = { name: 'John Doe' };
    return (
        <userContext.Provider value={user} />,
        <userProfile />,
        <userContext.Provider />
    );
}*/