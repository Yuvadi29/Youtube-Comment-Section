import React, { useState } from 'react'
import './styles.css';

const Comment = ({ comment, addReply }) => {
    const [showReply, setShowReply] = useState(false);
    const [replyText, setReplyText] = useState('');

    const handleReply = () => {
        if (replyText.trim()) {
            addReply(comment.id, replyText);
            setReplyText('');
            setShowReply(false);
        }
    };

    return (
        <div className='comment'>
            <div className='comment-avatar'>
                <img
                    src={`https://i.pravatar.cc/40?u=${comment.author} `}
                    alt={comment.author}
                />
            </div>

            <div className='comment-content'>
                <div className='comment-header'>
                    <span className='comment-author'>{comment.author}</span>
                    <span className='comment-time'>2 hours ago</span>
                </div>
                <div className='comment-text'>{comment.text}</div>
                <div className='comment-actions'>
                    <button onClick={() => setShowReply(!showReply)}>Reply</button>
                </div>

                {showReply && (
                    <div className='comment-reply'>
                        <textarea
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder='Add a public reply..'
                        />
                        <div className='comment-reply-actions'>
                            <button className='cancel-button'
                                onClick={() => setShowReply(false)}
                            >Cancel</button>
                            <button className='submit-button'
                                onClick={handleReply}>Reply</button>
                        </div>
                    </div>
                )}

                {comment.replies.map(reply => (
                    <Comment key={reply.id} comment={reply} addReply={addReply} />
                ))}
            </div>

        </div>
    )
}

export default Comment