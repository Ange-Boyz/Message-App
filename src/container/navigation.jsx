import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
            <div className="head  md:px-10 p-2 flex py-3 justify-between items-center">
                <div className="logo flex items-center">
                    <div className="md:w-16 md:h-16 w-7 h-7 bg-white rounded-full overflow-hidden">
                        <img src="cot.jpeg" alt="" />

                    </div>
                    <p className="md:text-3xl text-lg font-bold text-white ml-1">COT HND</p>
                </div>


                <div className="navbar">
                    <ul className="flex md:space-x-10 text-white  ">
                        <li>
                            <NavLink to="/PostContainer" className= {({isActive}) => isActive ? "bg-white rounded-xl md:flex items-center space-x-1 px-3 py-1 text-black block " : 
                            "items-center space-x-1 px-3 py-1 hover:bg-white rounded-xl hover:text-black md:flex block" }>
                                <img src="bxs-book-add.svg" alt="" className="m-auto md:m-0 w-6" />
                                <p className="      ">Home</p>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/Friend" className= {({isActive}) => isActive ? "bg-white rounded-xl md:flex block items-center space-x-1 px-3 py-1 text-black" : 
                            "items-center space-x-1 px-3 py-1 hover:bg-white rounded-xl hover:text-black md:flex block" }
                            >
                                <img src="bxs-group.svg" alt="" className="w-6 m-auto" />
                                <p>Friend</p>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="#" className="md:flex block  items-center space-x-1 px-3 py-1 hover:bg-white rounded-xl hover:text-black">
                                <img src="bxs-file-image.svg" alt="" className="w-6 m-auto" />
                                <p>Forum</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default Navigation;