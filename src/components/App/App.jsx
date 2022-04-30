import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

function App() {

  const [gallery, setGallery] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [path, setPath] = useState('');

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
    
    if(path.length === 0 || title.length === 0 || description.length === 0) {
      alert(`You can't leave anything blank.`)
    } else {
      addPhoto();
    };
  };

  const addPhoto = () => {
    console.log('in addPhoto');

    axios({
      method: 'POST',
      url: 'gallery',
      data: {
        path: path,
        title: title,
        description: description,
      }
    }).then(response => {
      fetchGallery(); // fetches updated gallery
    }).catch(error => {
      console.log('error in adding new image: ', error);
    });
  };

  const deletePhoto = (id) => {
    console.log('clicked delete button');

    if(confirm('Are you sure you want to delete this?')) {
      axios({
        method: 'DELETE',
        url: `/gallery/${id}`
      }).then(response => {
        console.log('response: ', response);
        fetchGallery();
      }).catch(error => {
        console.log('error: ', error);
        alert('error in deleting photo!')
      });
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
        setPath={setPath}
        setTitle={setTitle}
        setDescription={setDescription}
      />
      <GalleryList
        gallery={gallery}
        heartPhoto={heartPhoto}
        deletePhoto={deletePhoto}
      />
    </div>
  );
}

export default App;
