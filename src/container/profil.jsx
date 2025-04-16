import React from "react";

const Profil = () => {
    return (
        <div className="bg-[#1a1a1e] w-[30%] h-[80%] rounded-2xl text-white hidden md:block ">

            <div className="image mb-14">
                <div className="board w-full h-32 overflow-hidden rounded-t-2xl ">
                    <img src="dd.jpg" alt="" />
                </div>
                <div className="w-32 h-32 bg-white rounded-full absolute top-36 left-28 overflow-hidden trasition duration-300 hover:scale-150">
                    <img src="boy1.png" alt="" className="w-full" />
                </div>
            </div>
            <div className="information text-center space-y-1 mb-2">
                <h1 className="text-2xl text-center">ANGE CABREL</h1>
                <p className="text-[#58585c] text-center text-xl">@ange__boyz</p>
                <p className="px-8">I'm 😎the boy that every girl fear in COT HND program✌🐱‍👤, the di call me AZAMAN🤑</p>
                
            </div>
            <p className="text-xl text-blue-500 mb-5 text-center">My profil</p>
            
            <div className="friend border-t-8 border-[#000008] px-5 py-3">
                <div className="flex items-center justify-between">
                    <p className="text-2xl">103 Friends</p>
                    <p className="text-blue-500">View all -</p>
                </div>
            </div>
            
        </div>
    )
}

export default Profil;