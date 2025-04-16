import React from "react";
import { useState } from "react";

const PostForm = ({onAddPost}) => {
    const [newpost, setNewPost]=useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(newpost.trim()){
            onAddPost(newpost);
            setNewPost('')
        }
    }

    return (
        <div className="bg-[#1a1a1e] w-[100%] h-20 p-4 rounded-2xl items-center flex justify-between">
            <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
                <img src="boy1.png" alt="" className="w-full" />
            </div>

            <div className="textArea w-[83%] flex space-x-2">
        
                <form action="" className="w-[100%] flex" onSubmit={handleSubmit}>
                    <input type="text" name="" id="" placeholder="What's happening?"
                    className="w-[100%] bg-[#2b2b32] p-4 rounded-2xl text-white outline-none"
                        value={newpost} onChange={(e)=> setNewPost(e.target.value)}
                     />
                     <button type="submit" className="trasition duration-300 hover:scale-125">
                <img src="bxs-send.svg" alt="" />
                </button>
                </form>

                

            </div>
            <div className="files  items-center trasition duration-300 hover:scale-125">
                <img src="bxs-file-image.svg" alt="" />
            </div>
        </div>
    )
}
export default PostForm;