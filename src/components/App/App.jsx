import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

function App() {

  const [gallery, setGallery] = useState([]);
  const [title, setTitle] = useState('');


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
      url: `/gallery/like/${photoId}`
    }).then(response => {
      console.log('clicked like: ', response);
      fetchGallery();
    }).catch(error => {
      alert('error in liking pic!', error);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('in handleSubmit');
    
    if(title.length === 0) {
      alert('Enter a title.')
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Likes of Phaydara</h1>
      </header>
      {/* <p>Gallery goes here</p> */}
      {/* {JSON.stringify(gallery)} */}
      <GalleryForm
        handleSubmit={handleSubmit}
        setTitle={setTitle}
      />
      <GalleryList
        gallery={gallery}
        heartPhoto={heartPhoto}
      />
    </div>
  );
}

export default App;
