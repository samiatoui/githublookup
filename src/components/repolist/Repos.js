import "./repos.css";
import React, { useState, useEffect } from 'react';
import GitHub from "../userinfo/github.svg";
import External from "../repolist/external.svg";


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
        <div className="repo-cont">
            <div className="repo-item" key={repo}>
                <h2>{repo.name}</h2>
                <div className="repo-btncont">
                    <div className="repo-button"><a href={repo.html_url} target="_blank"><img src={GitHub} title="View on GitHub" className="github-icon-repo"></img></a></div>
                    {
                        repo.homepage !== "" && repo.homepage !== null ? (<div className="repo-button"><a href={repo.homepage} target="_blank"><img src={External} title="View Live Demo" className="external-icon"></img></a>  </div>) : <div className="repo-button"></div>
                    }
                </div>
                <p>{repo.description}</p>

            </div>
        </div>
    ));
}