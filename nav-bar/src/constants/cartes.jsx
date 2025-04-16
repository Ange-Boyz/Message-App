import React from "react";
import { Programs } from ".";
import { useState } from "react";

export const CardContainer = () => {
    /*return (
        <div className="bg-[#094582] p-24 space-y-9">
            <h1 className="text-6xl font-bold text-white text-center">Here is All Our Programs</h1>
            <div className="flex flex-wrap  justify-center space-x-10 gap-4  ">

                {Programs.map((item, index) => (

                    <Carte
                        key={index}
                        name={item.name}
                        program={item.program}
                        percentage={item.percentage}
                        description={item.description} />
                ))}
            </div>
        </div>
    );
}

function Carte({ name, program, percentage, description }) {
    const [count, setCount] = useState(0)

    return (
        <div className="card w-80 h-96 bg-white rounded-2xl border-4 border-yellow-500 shadow-lg shadow-yellow-500 p-5 mb-10">

            <div className="title text-3xl font-bold text-yellow-500">
                {name}
            </div>

            <div className="percentage text-8xl font-bold text-yellow-500 my-5 text-center">
                {percentage}%
            </div>

            <div className="program text-xl font-bold ">
                {program}
            </div>


            {description}

            <p>like: {count}</p>
            <button onClick={()=>setCount(count+1)}> Click me</button>
        </div>
    );*/
}

