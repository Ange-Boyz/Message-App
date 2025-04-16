import React, { useState } from 'react';
import Post from '../post';

// Type de données pour un commentaire
// {
//   id: string,
//   content: string,
//   createdAt: Date,
//   isEditing: boolean
// }

export const Comment = ({ comment, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(comment.content);

    const handleEdit = () => {
        if (isEditing) {
            onEdit(comment.id, editedContent);
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className="ml-4 p-3 bg-white rounded-lg mt-2">
            {isEditing ? (
                <input type='text'
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    className="w-full p-2 border rounded-md bg-[#58585c]  p-2 rounded-2xl text-white outline-none "
                />
            ) : (
                <p className="text-gray-700">{editedContent}</p>
            )}

            <div className="flex gap-2 mt-2">
                <button
                    onClick={handleEdit}
                    className="text-sm text-blue-500 hover:text-blue-700"
                >
                    {isEditing ? 'Save' : 'Edit'}
                </button>
                <button
                    onClick={() => onDelete(comment.id)}
                    className="text-sm text-red-500 hover:text-red-700"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export const CommentForm = ({ onSubmit }) => {
    const [content, setContent] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.trim()) {
            onSubmit(content);
            setContent('');
        }
    };

    return (
        <div className="">
            
        
                <form onSubmit={handleSubmit} className="mt-4 flex space-x-5 bg-[#58585c]  p-2 rounded-2xl text-white ">
                <input type="text" value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Add a comment..."
                    className="w-full bg-none outline-none bg-[#58585c]  p-2" />
                    <input type="submit" placeholder='send' className='text-blue-500'/>
            </form>
               
            
        </div>
    );
};

