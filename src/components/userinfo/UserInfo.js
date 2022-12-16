import React, { useState, useEffect } from 'react';


export default function UserInfo() {

    const [name, setName] = useState('');
    const [imgURL, setImg] = useState('');
    const [blog, setBlog] = useState('');
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');



    useEffect(() => {
        const fetchRepos = async () => {
            const results = await fetch('https://api.github.com/users/samiatoui');
            const jsonData = await results.json();
            setName(jsonData.name);

        }
        fetchRepos()
            .catch(console.error)
    }, [])

    return (
        <div>
            {name}
        </div>
    )
}