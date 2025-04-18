import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () =>{
    return(
        <div className=" text-white bg-[#000008] h-[100vh] md:px-10 px-2">
            <div className="flex justify-between items-center h-[70px]  ">
                <div className="logo text-blue-500 font-bold text-3xl">KEMCHAT</div>

                <div className="md:flex space-x-6 hidden">
                    <button>About Us</button>
                    <button>Contact Us</button>
                </div>
                <nav>   
                    <ul className="flex space-x-4">
                    <button className=" py-1 px-3 rounded-full ">
                        <NavLink to="/login">Login</NavLink></button>
                    <button className="bg-blue-500 py-1 px-3 rounded-full">
                        <NavLink to="signUp">Sign In</NavLink></button>
                    </ul>
                </nav>
            </div>

            <div className="">
                <div className="">
                    <h1 className="text-5xl font-bold">Welcome to <span className="text-blue-500">KEMCHAT</span></h1>
                    <p className="text-2xl">The platforme is not yet ready, but we have a static website for the moment...so feel
                         free to discover our platform</p>
                    <button className="bg-blue-500 py-1 px-3 rounded-full mt-5">
                         <NavLink to="signUp">Disover -</NavLink></button>  
                </div>
            </div>
        </div>
    )
}

export default Landing;