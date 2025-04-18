import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
    return(
        <div className=" bg-[#000008] h-[100vh] text-white content-center ">
        <div className="bg-[#1a1a1e] w-96  m-auto p-5 rounded-2xl">
            <h1 className="text-3xl mb-10">Login</h1>
            <form action="" className="space-y-4">
                <div className="flex items-center">
                    <p>email</p>
                    <input type="mail" placeholder="Enter your email" className="bg-[#2b2b32] w-full rounded-full py-2 px-3 ml-3 " />
                </div>
                <div className="flex items-center">
                    <p>password</p>
                    <input type="password" placeholder="Enter a password" className="bg-[#2b2b32] w-full rounded-full py-2 px-3 ml-3 " />
                </div>

                <div className="">
                    <NavLink to="/Mainpage">
                        <input type="submit" value="LogIn" className="bg-blue-500 w-full rounded-full py-2 px-3 mt-6 mb-2 " />
                    </NavLink>
                    <p>I don't yet have an account
                        <NavLink to="/signUp"><span className="text-blue-500 underline ml-2">Sign UP?</span> </NavLink>
                    </p>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Login;