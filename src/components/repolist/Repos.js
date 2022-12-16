import "./repos.css";
import React, { useState, useEffect } from 'react';


export default function Repos() {

    const [repos, setRepo] = useState([]);


    useEffect(() => {
        const fetchRepos = async () => {
            const repoData = await fetch('https://api.github.com/users/samiatoui/repos');
            const json = await repoData.json();
            setRepo(json);

        }
        fetchRepos()
            .catch(console.error)
    }, [])

    return repos.map((repo) => (
        <div>
            <div className="repo-item" key={repo}>
               

                <div className="repo-btncont">
                    <div className="repo-button"><a href={repo.html_url}> </a></div>

                    {
                        repo.homepage !== "" && repo.homepage !== null ? (<div className="repo-button"><a href={repo.homepage} target="_blank"></a></div>) : <div className="repo-button"></div>
                    }
                </div>
                <p>{repo.description}</p>
            </div>
        </div>
    ));
}