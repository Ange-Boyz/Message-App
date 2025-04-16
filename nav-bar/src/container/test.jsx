import React from "react";
import { useState } from "react";

export const PostFrom = ({onAddPost}) => {
    const [newPost, setNewPost] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newPost.trim()){
            onAddPost(newPost);
            setNewPost('')
        }
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="" id="" value={newPost} onChange={ (e) => setNewPost(e.target.value)} />
            <input type="submit"  />
        </form>
    )
};

export const PostList = ({posts}) => {
    return (
        <div className="space-y-4">
        {posts.map((post, index) => (
            <div className="bg-white p-4" key={index}>
                <p>{post}</p>
            </div>
        ))}
    </div>

    );
    
};

export const Applo = () => {
    const [posts, setPosts] = useState([]);

    const handleAddPost = (newPost) => {
        setPosts([newPost, ...posts]);
    };

    return(
        <div className="">
            <h1 className="text-white font-bold text-2xl">My post </h1>
            <PostFrom onAddPost={handleAddPost}/>
            <PostList posts={posts}/>
        </div>

    )
};


