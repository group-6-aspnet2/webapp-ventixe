import React, { useState } from 'react';
import '../../../styles/inbox.css';

const UserInbox = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'Admin Support',
            preview: 'Welcome to our platform! We\'re here to help...',
            time: '2 hours ago',
            unread: true
        },
        {
            id: 2,
            sender: 'System Notification',
            preview: 'Your profile has been successfully updated',
            time: '1 day ago',
            unread: false
        }
    ]);

    const [filter, setFilter] = useState('all');

    const filteredMessages = messages.filter(message => {
        if (filter === 'unread') return message.unread;
        if (filter === 'read') return !message.unread;
        return true;
    });

    const markAsRead = (messageId) => {
        setMessages(messages.map(message =>
            message.id === messageId ? { ...message, unread: false } : message
        ));
    };

    const deleteMessage = (messageId) => {
        setMessages(messages.filter(message => message.id !== messageId));
    };

    return (
        <div className="inbox-container">
            <div className="inbox-header">
                <h1 className="inbox-title">Inbox</h1>
            </div>

            <div className="inbox-filters">
                <div className="filter-group">
                    <button
                        className={`message-action-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All Messages
                    </button>
                    <button
                        className={`message-action-btn ${filter === 'unread' ? 'active' : ''}`}
                        onClick={() => setFilter('unread')}
                    >
                        Unread
                    </button>
                    <button
                        className={`message-action-btn ${filter === 'read' ? 'active' : ''}`}
                        onClick={() => setFilter('read')}
                    >
                        Read
                    </button>
                </div>
            </div>

            <div className="inbox-messages">
                {filteredMessages.length > 0 ? (
                    filteredMessages.map(message => (
                        <div
                            key={message.id}
                            className={`message-item ${message.unread ? 'unread' : ''}`}
                        >
                            <div className="message-avatar">
                                {message.sender[0]}
                            </div>
                            <div className="message-content">
                                <div className="message-sender">{message.sender}</div>
                                <div className="message-preview">{message.preview}</div>
                            </div>
                            <div className="message-time">{message.time}</div>
                            <div className="message-actions">
                                {message.unread && (
                                    <button
                                        className="message-action-btn"
                                        onClick={() => markAsRead(message.id)}
                                    >
                                        Mark as Read
                                    </button>
                                )}
                                <button
                                    className="message-action-btn"
                                    onClick={() => deleteMessage(message.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="inbox-empty">
                        <div className="inbox-empty-icon">📭</div>
                        <p>No messages found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserInbox; 