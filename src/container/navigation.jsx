import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
            <div className="head  md:px-10 flex py-3 justify-between items-center">
                <div className="logo flex items-center">
                    <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
                        <img src="cot.jpeg" alt="" />

                    </div>
                    <p className="md:text-3xl text-lg font-bold text-white ml-3">COT HND</p>
                </div>


                <div className="navbar">
                    <ul className="flex md:space-x-10 text-white  ">
                        <li>
                            <NavLink to="/PostContainer" className= {({isActive}) => isActive ? "bg-white rounded-xl md:flex items-center space-x-2 px-4 py-2 text-black block " : 
                            "items-center space-x-2 px-4 py-2 hover:bg-white rounded-xl hover:text-black md:flex block" }>
                                <img src="bxs-book-add.svg" alt="" className="m-auto md:m-0" />
                                <p className="      ">Home</p>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/Friend" className= {({isActive}) => isActive ? "bg-white rounded-xl md:flex block items-center space-x-2 px-4 py-2 text-black" : 
                            "items-center space-x-2 px-4 py-2 hover:bg-white rounded-xl hover:text-black md:flex block" }
                            >
                                <img src="bxs-group.svg" alt="" />
                                <p>Friend</p>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="#" className="md:flex block  items-center space-x-2 px-4 py-2 hover:bg-white rounded-xl hover:text-black">
                                <img src="bxs-file-image.svg" alt="" />
                                <p>Forum</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default Navigation;