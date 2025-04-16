import React from "react";
import Navigation from "./navigation";
import Profil from "./profil";
import PostContainer from "./post-container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Friend from "./friend";

const MainPage = () => {
    return (
        <BrowserRouter>
            <div className=" bg-[#000008] h-[100vh]">
                <Navigation />
                <div className="flex md:space-x-6 md:px-10">
                    <Profil />
                    <div className="w-full  ">
                        <Routes>
                            <Route path="/PostContainer" element={<PostContainer />} />
                            <Route path="/Friend" element={<Friend />} />

                        </Routes>
                    </div>
                </div>
                
            </div>
        </BrowserRouter>

    )
}
export default MainPage;