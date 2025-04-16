import React, { useState } from "react";
import { Comment } from "./comment/commentContainer";
import { CommentForm } from "./comment/commentContainer";

const Post = ({ posts }) => {

    // Gestion des commentaires pour chaque post
    const [commentsMap, setCommentsMap] = useState({});

    const addComment = (postId, content) => {
        const newComment = {
            id: `${postId} - ${Date.now()}`,
            content,
            createdAt: new Date(),
        };

        setCommentsMap(prev => ({
            ...prev,
            [postId]: [...(prev[postId] || []), newComment]
        }));
    };

    const editComment = (postId, commentId, newContent) => {
        setCommentsMap(prev => ({
            ...prev,
            [postId]: prev[postId]?.map(comment =>
                comment.id.startsWith(`${postId}-`) && comment.id === commentId
                    ? { ...comment, content: newContent }
                    : comment
            ) || []
        }));
    };

    const deleteComment = (postId, commentId) => {
        setCommentsMap(prev => ({
            ...prev,
            [postId]: prev[postId].filter(comment => comment.id !== commentId)
        }));
    };

    {/****************LiKE OPTION*****************/}
    const [likesMap, setLikesMap] = useState({});
    const toggleLike = (postId) => {
        setLikesMap(prev => ({
            ...prev,
            [postId]: {
                count: (prev[postId]?.count || 0) + 1,
                liked: !(prev[postId]?.liked || false),
            }
        }));
    }


    {/*************HIDE COMMENT******************* */ }
    const [isVisible, setIsVisible] = useState({});

    const toggleVisibility = (postId) => {
        setIsVisible(prev => ({
            ...prev,
            [postId]: !prev[postId]
        }));
    };



    return (
        <div className="post-container space-y-10  ">

            {posts.map((post, index) => (
                <div className="content flex space-x-5  " key={index}>

                    <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
                        <img src="boy1.png" alt="" className="w-full" />
                    </div>

                    <div className="others text-white">
                        <div className="name flex space-x-4 items-center">
                            <p className="text-xl">ANGE CABREL</p>
                            <p className="text-[#58585c]">@ange__boyz</p>
                        </div>
                        <div className="time">
                            <p className="text-[#58585c]">now</p>
                        </div>
                        <div className="post mt-4 bg-[#2b2b32] p-4 rounded-b-2xl rounded-r-2xl space-y-4 text-xl ">

                            {/********************************POST ************************** */}
                            <p className="max-w-full ">{post}</p>

                            {/**********************Post reaction*****************/}


                            <div className="">


                                {/**********REACTION SECTION*************** */}

                                <div className="flex items-center space-x-8">

                                    {/************LIKE BUTTON **************** */}
                                    <div className="flex items-center space-x-2  trasition duration-300 hover:scale-125">
                                        <button
                                            onClick={() => toggleLike(index)}
                                            className={`flex items-center space-x-2 ${likesMap[index]?.liked ? 'text-red-500' : 'text-gray-500'}`}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill={likesMap[index]?.liked ? 'currentColor' : 'none'}
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            </svg>
                                            <span>{likesMap[index]?.count || 0}</span>
                                        </button>
                                    </div>


                                    {/**********COMMENT BUTTON **************************** */}
                                    <button className="flex items-center space-x-2 text-[#89898b] trasition duration-300 hover:scale-125" onClick={() => toggleVisibility(index)}>

                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="h-6 w-6"
                                            fill={isVisible[index] ? '#2196f3' : '#89898b'}
                                        >
                                            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"

                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2} />
                                        </svg>
                                        <p>Comment</p>

                                    </button>

                                    {/*******************SHARE BUTON **************** */}
                                    <button className="flex space-x-2 text-[#89898b] items-center trasition duration-300 hover:scale-125 ">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="h-6 w-6"
                                        >
                                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"
                                                fill="currentColor" />
                                        </svg>
                                        <p>Share</p>
                                    </button>

                                </div>

                                
                                {/* Liste des commentaires */}
                                {isVisible[index] && (
                                    <div className=" mb-8 trasition duration-600">
                                        <div className="mt-4">

                                            <h3 className=" text-[#89898b]">Commentaires</h3>
                                            {commentsMap[index]?.map(comment => (
                                                <Comment
                                                    key={comment.id}
                                                    comment={comment}
                                                    onEdit={(commentId, newContent) =>
                                                        editComment(index, commentId, newContent)
                                                    }
                                                    onDelete={(commentId) => deleteComment(index, commentId)}
                                                />
                                            ))}

                                        </div>





                                        <div className="">
                                            {/* Formulaire de nouveau commentaire */}
                                            <CommentForm
                                                onSubmit={(content) => addComment(index, content)}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            ))};




        </div >
    );
}

export default Post;