import React, { useState, useEffect } from 'react';
import "./userinfo.css"
import GitHub from "./github.svg"

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
        <div className='user-info'>
            <div className='user-img'>
                <img src={img}></img>
            </div>

            <div className='user-bio'>
                <h2>{name}</h2>
                <p>{bio}</p>
                <p>{location}</p>
                <a href={blog} target="_blank"><img src={GitHub} className="github-icon"></img></a>
            </div>

        </div>
    )
}