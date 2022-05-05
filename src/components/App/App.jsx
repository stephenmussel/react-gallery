import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';

function App() {

  const [gallery, setGallery] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [path, setPath] = useState('');

  useEffect(() => {
    console.log('in useEffect');
    fetchGallery();
  }, [])

  // GET request to server for photo info
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

  // PUT request to server to update like count
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

  // input validation to make sure both inputs are not empty
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('in handleSubmit');
    
    if(path.length === 0 || title.length === 0 || description.length === 0) {
      alert(`You can't leave anything blank.`)
    } else {
      addPhoto();
    };
  };

  // POST request to server to create new record in DB
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

      // clear inputs
      setPath('');
      setTitle('');
      setDescription('')

      // fetches updated gallery
      fetchGallery(); 
    }).catch(error => {
      console.log('error in adding new image: ', error);
    });
  };

  // DELETE request to server to delete selected photo
  const deletePhoto = (id) => {
    console.log('clicked delete button');

    // confirms deletion
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
      <div className="sticky-container">
      <header className="App-header">
        <h1 className="App-title">The Likes of Phaydara</h1>
      </header>

      {/* Component to add photos and info to DB */}
      <GalleryForm
        handleSubmit={handleSubmit}
        setPath={setPath}
        setTitle={setTitle}
        setDescription={setDescription}
        path={path}
        title={title}
        description={description}
      />
      </div>

      {/* Component that displays list of photos and information from DB */}
      <GalleryList
        gallery={gallery}
        heartPhoto={heartPhoto}
        deletePhoto={deletePhoto}
      />
    </div>
  );
}

export default App;
