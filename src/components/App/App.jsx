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
    }).catch(error => {
      alert('error in fetchGallery: ', error);
    });
  };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
