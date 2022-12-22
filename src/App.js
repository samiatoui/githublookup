import './App.css'
import React, { useState, useEffect } from 'react';
import GitHub from "./github.svg"
import External from "./external.svg";

function App() {

  const [username, setUser] = useState();

  const getInput = (event) => {
    const userValue = event.target.value;
    setUser(userValue);

  }


  const [name, setName] = useState('');
  const [img, setImg] = useState();
  const [blog, setBlog] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [url, setURL] = useState('');

  const [repos, setRepo] = useState([]);

  const changeUser = async () => {
    const results = await fetch(`https://api.github.com/users/${username}`).then((response => response.json()));
    setName(results.name);
    setImg(results.avatar_url);
    setBlog(results.blog);
    setLocation(results.location);
    setBio(results.bio);
    setURL(results.html_url);

    const repoData = await fetch(`https://api.github.com/users/${username}/repos`);
    const json = await repoData.json();
    setRepo(json);
  }



  return (
    <div>


      <div className='form'>
        <input
          type="text"
          onChange={getInput}>
        </input>
        <button onClick={changeUser}>Search</button>
      </div>
      <div className="App">




        <div className='user-info'>
          <div className='user-img'>
            <img src={img}></img>
          </div>

          <div className='user-bio'>
            <h2>{name}</h2>
            <p>{bio}</p>
            <p>{location}</p>
            <div className='btn-cont'>
              {
                blog !== "" && blog !== null ? (<a href={blog} target="_blank"><img src={GitHub} className="github-icon"></img></a>) : <p>Search for a user to populate!</p>
              }

              {
                url !== "" && url !== null ? (<a href={url} target="_blank"><img src={GitHub} className="github-icon"></img></a>) : <a href="" className='empty-btn'></a>
              }


            </div>
          </div>
        </div>
        <div className="repo-main">
          {
            repos.map((repo) => (
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
            ))}
        </div>

      </div>
    </div>
  )
}

export default App;
