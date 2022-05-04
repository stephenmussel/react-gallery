import { useState } from 'react';
import Stack from '@mui/material/Stack';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../GalleryItem/GalleryItem.css';

function GalleryItem({ each, heartPhoto, deletePhoto }) {

    const [click, setClick] = useState(true);

    return (
        <div key={each.id} className="item-container">
            <h2 className="photo-title">{each.title}</h2>
            <div className="photo-container">
                <img 
                    src={each.path} 
                    alt="gallery photo"
                    onClick={() => click ? setClick(false) : setClick(true)}
                    className={click ? "" : "reduce-opacity"}
                />
                
            </div>
            <div className="heart-delete-container">
                <div>
                    <IconButton onClick={() => heartPhoto(each.id)}>
                        <FavoriteIcon color="secondary" style={{ marginRight: 5, marginLeft: 5 }} />
                        {each.likes}
                    </IconButton>
                </div>
                <div>
                    <IconButton
                        aria-label="delete"
                        size="large"
                        onClick={() => deletePhoto(each.id)}
                    >
                        <DeleteIcon style={{ marginRight: 5 }} />
                    </IconButton>
                </div>
            </div>
            {/* {click ? <p>image</p> : <p>{each.description}</p>} */}
            {click ? "" : <p>{each.description}</p>}

        </div>

        
    )
}

export default GalleryItem;