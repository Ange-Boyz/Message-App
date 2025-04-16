import React from "react";
import { useState } from "react";

const Friend = () =>{
    const [counter, setCounter]= useState(false);
    const [query, setQuery] = useState('');
    const items=['Banana', 'Apple', 'Grape', 'Mango'];

    const filteredItems = items.filter(item => item.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
    return(
        <div className="text-white w-full bg-[#1a1a1e] h-[100%] rounded-2xl p-5">
            <h1 className="text-3xl font-bold mb-5">My Friends</h1>


            <div className="friendCard border-t-2 border-[#58585c] px-5 py-3">
                
                <div className="card mt-4 flex items-center justify-between">
                {counter &&(
                    <div className="space-x-5 flex items-center">
                        <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
                            <img src="2.jpg" alt="" className="h-full" />
                        </div>
                        <div className="name">
                            <p className="text-xl">Lili Fofe Dev</p>
                            <p className="text-[#58585c]">@liliFofe</p>
                        </div>
                    </div>
                )}
                    <div className="btn px-7 py-2 bg-white text-[#1a1a1e] font-bold 
                    rounded-3xl trasition duration-300 hover:scale-125 "  onClick={()=> setCounter(!counter)}>
                    Discuss with this Friend
                    </div>
                </div>

                <div className="card mt-4 flex items-center justify-between">
                    <div className="space-x-5 flex items-center">
                        <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
                            <img src="dd.jpg" alt="" className="h-full" />
                        </div>
                        <div className="name">
                            <p className="text-xl">Petite~mama ❤👩🏼</p>
                            <p className="text-[#58585c]">@petite~mama</p>
                        </div>
                    </div>

                    <div className="btn px-7 py-2 bg-white text-[#1a1a1e] font-bold rounded-3xl trasition duration-300 hover:scale-125">
                    Discuss with this Friend
                    </div>
                </div>

                <div className="">
                    <input type="text" placeholder="Search..." className="text-black" value={query} onChange={e =>setQuery(e.target.value)} />

                    <ul>
                        {filteredItems.map((item, index) =>(
                            <li key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Friend;