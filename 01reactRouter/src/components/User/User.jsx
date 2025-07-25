import React from 'react';
import { useParams } from 'react-router-dom';

function User(){

    const { userid } = useParams();

    return(
        <div style={{
            padding: '20px',
            margin: '10px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            width: '800px', // Adjust the width as needed
        }}>
            <h1>user:{userid}</h1>
        </div>
    )

}

export default User;