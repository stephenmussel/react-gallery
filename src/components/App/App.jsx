import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    console.log('in useEffect');
    fetchGallery();
  }, [])

  const fetchGallery = () => {
    console.log('in fetchGallery');

    axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      console.log('response.data: ', response.data);
      setGallery(response.data);
    }).catch(error => {
      alert('error in fetchGallery: ', error);
    });
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {/* <p>Gallery goes here</p> */}
        {/* {JSON.stringify(gallery)} */}
        {gallery.map(each => (
          <div>
            <img src={each.path} />
            <h2>{each.title}</h2>
            <p>{each.description}</p>
            <p>{each.likes}</p>
          </div>

        ))}
      </div>
    );
}

export default App;
