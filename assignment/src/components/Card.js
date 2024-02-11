import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Card = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
        .then(response => setUser(response.data.results[0]))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-[95%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[40%] rounded shadow-lg">
                {user && (
                    <div className='font-bold flex flex-col md:flex-row border-black border-4 p-8'>
                        <div>
                            <img src={user.picture.large} alt="user" className="border-4 border-black " />
                        </div>
                        <div className='flex flex-col p-6 items-start '>
                            <p className="text-xl mb-2">{user.name.first} {user.name.last}</p>
                            <p className="mb-2">Gender: {user.gender}</p>
                            <p className="mb-2">Phone Number: {user.phone}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
