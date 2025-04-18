import React from "react";
import Navigation from "./navigation";
import Profil from "./profil";
import PostContainer from "./post-container";
import Friend from "./friend";
import { Route, Routes } from "react-router-dom";


 const MainPage = () => {
    return (
        <div className=" bg-[#000008] h-[100vh]">
            <Navigation />
            <div className="flex md:space-x-6 md:px-10">
                <Profil />
                <div className="w-full  ">
                    <Routes>
                        <Route path="/PostContainer" element={<PostContainer/>} />
                        <Route path="/Friend" element={<Friend/>} />
                    </Routes>
                </div>
            </div>
        </div>

    )
}
export default MainPage;


