import React from "react";
import { useState } from "react";
import Post from "./postComponents/post";
import PostForm from "./postComponents/head";


const PostContainer = () => {
    const [posts, setPosts] = useState([]);

    const handleAddPost = (newPost) => {
        setPosts([newPost, ...posts]);
    };

    return (

        <div className=" space-y-3 h-full">
            
            <PostForm onAddPost={handleAddPost} />

            <div className="bg-[#1a1a1e] w-[100%] rounded-2xl p-5 h-[63vh]  overflow-y-scroll">
                <Post posts={posts} />
                
            </div>
           
        </div>
    )
}

export default PostContainer;