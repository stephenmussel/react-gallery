import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

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
          <h1 className="App-title">Life of Phaydara</h1>
        </header>
        {/* <p>Gallery goes here</p> */}
        {/* {JSON.stringify(gallery)} */}
        <GalleryList 
          gallery={gallery}
        />
      </div>
    );
}

export default App;
