import React, { useState } from 'react';
import '../../../styles/inbox.css';

const AdminInbox = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'John Doe',
            email: 'john@example.com',
            preview: 'I have a question about my recent order...',
            time: '1 hour ago',
            unread: true,
            priority: 'high'
        },
        {
            id: 2,
            sender: 'Jane Smith',
            email: 'jane@example.com',
            preview: 'Thank you for your help with my account',
            time: '3 hours ago',
            unread: false,
            priority: 'normal'
        }
    ]);

    const [filter, setFilter] = useState('all');
    const [priorityFilter, setPriorityFilter] = useState('all');

    const filteredMessages = messages.filter(message => {
        const statusMatch = filter === 'all' || 
            (filter === 'unread' && message.unread) ||
            (filter === 'read' && !message.unread);
        
        const priorityMatch = priorityFilter === 'all' || 
            message.priority === priorityFilter;

        return statusMatch && priorityMatch;
    });

    const markAsRead = (messageId) => {
        setMessages(messages.map(message =>
            message.id === messageId ? { ...message, unread: false } : message
        ));
    };

    const deleteMessage = (messageId) => {
        setMessages(messages.filter(message => message.id !== messageId));
    };

    const markAllAsRead = () => {
        setMessages(messages.map(message => ({ ...message, unread: false })));
    };

    return (
        <div className="inbox-container">
            <div className="inbox-header">
                <h1 className="inbox-title">Admin Inbox</h1>
                <button
                    className="message-action-btn"
                    onClick={markAllAsRead}
                >
                    Mark All as Read
                </button>
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
                <div className="filter-group">
                    <button
                        className={`message-action-btn ${priorityFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setPriorityFilter('all')}
                    >
                        All Priorities
                    </button>
                    <button
                        className={`message-action-btn ${priorityFilter === 'high' ? 'active' : ''}`}
                        onClick={() => setPriorityFilter('high')}
                    >
                        High Priority
                    </button>
                    <button
                        className={`message-action-btn ${priorityFilter === 'normal' ? 'active' : ''}`}
                        onClick={() => setPriorityFilter('normal')}
                    >
                        Normal Priority
                    </button>
                </div>
            </div>

            <div className="inbox-messages">
                {filteredMessages.length > 0 ? (
                    filteredMessages.map(message => (
                        <div
                            key={message.id}
                            className={`message-item ${message.unread ? 'unread' : ''} ${message.priority === 'high' ? 'high-priority' : ''}`}
                        >
                            <div className="message-avatar">
                                {message.sender[0]}
                            </div>
                            <div className="message-content">
                                <div className="message-sender">{message.sender}</div>
                                <div className="message-email">{message.email}</div>
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
                                <button
                                    className="message-action-btn"
                                    onClick={() => {/* Implement reply functionality */}}
                                >
                                    Reply
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

export default AdminInbox; 