import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData();

    //const [data, setData] = React.useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/sarveshhome')
    //     .then( response => response.json())
    //     .then( data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, []);



  return (
    <div style={{
        textAlign: 'center',
        padding: '20px',
        margin: '10px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        width: '880px', // Adjust the width as needed
    }}>Github followers: {data?.followers}
    <img src={data?.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github;


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sarveshhome');
    return response.json();
}