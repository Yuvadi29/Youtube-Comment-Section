import React, { useState } from 'react'
import Comment from './Comment'
import './CommentSection.css';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const addComment = () => {
        if (newComment.trim()) {
            setComments([
                ...comments,
                {
                    id: new Date().getTime(),
                    author: 'CurrentUser',
                    text: newComment,
                    replies: []
                }
            ]);
            setNewComment('');
        }
    }

    const addReply = (commentId, replyText) => {
        const newComment = {
            id: new Date().getTime(),
            author: 'CurrentUser',
            text: replyText,
            replies: []
        };

        const addReplyToComments = (comments, commentId, reply) => {
            return comments.map(comment => {
                if (comment.id === commentId) {
                    return {
                        ...comment,
                        replies: [...comment.replies, reply]
                    };
                } else if (comment.replies.length > 0) {
                    return {
                        ...comment,
                        replies: addReplyToComments(comment.replies, commentId, reply)
                    };
                }
                return comment;
            });
        };

        setComments(addReplyToComments(comments, commentId, newComment));
    };

    return (
        <div className='comment-section'>
            <div className='new-comment'>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder='Add a Comment..'
                />
                <button onClick={addComment}>Comment</button>
            </div>
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} addReply={addReply} />
            ))}
        </div>
    )
}

export default CommentSection