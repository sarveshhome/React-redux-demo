import React from 'react';

function ChildComponent({ onSendMessage }) {
    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={onSendMessage}>Send Message to Parent</button>
        </div>
    );
}

export default ChildComponent;