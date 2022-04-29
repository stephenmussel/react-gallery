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

  const heartPhoto = (photoId) => {
    console.log('in heartPhoto');

    axios({
        method: 'PUT',
        url: `gallery/like/${photoId}`
    }).then(response => {
        console.log('clicked like: ', response);
        fetchGallery();
    }).catch(error => {
        alert('error in liking pic!', error);
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
          heartPhoto={heartPhoto}
        />
      </div>
    );
}

export default App;
