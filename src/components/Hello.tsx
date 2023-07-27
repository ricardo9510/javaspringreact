import React, { useEffect, useState } from 'react';

const Hello: React.FC = () => {
    const [message, setMessage] = useState<string>("Loading...");

    useEffect(() => {
        fetch("http://testeb-env.eba-fhtwyh4g.us-east-1.elasticbeanstalk.com/welcome")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text()
            })
            .then(message => {
                setMessage(message);
            })
            .catch(error => {
                setMessage(`Fetch failed: ${error.message}`);
            });
    }, []);


    return (
        <h1>{message}</h1>
    );
}

export default Hello;
