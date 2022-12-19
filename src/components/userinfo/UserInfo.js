import React, { useState, useEffect } from 'react';
import "./userinfo.css"

export default function UserInfo() {

    const [name, setName] = useState('');
    const [img, setImg] = useState();
    const [blog, setBlog] = useState('');
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');



    useEffect(() => {
        const fetchRepos = async () => {
            const results = await fetch('https://api.github.com/users/samiatoui');
            const jsonData = await results.json();
            setName(jsonData.name);
            setImg(jsonData.avatar_url);
            setBlog(jsonData.blog);
            setLocation(jsonData.location);
            setBio(jsonData.bio);

        }
        fetchRepos()
            .catch(console.error)
    }, [])

    
    return (
        <div className='userInfo'>
            <p>{name}</p>
            <img src={img}></img>
            <p>{bio}</p>
            <p>{location}</p>
            <p>{blog}</p>
        </div>
    )
}