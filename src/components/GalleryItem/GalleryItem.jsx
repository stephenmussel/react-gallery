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
            <div onClick={() => click === true ? setClick(false) : setClick(true)} className="photo-container">
                {click ? <img src={each.path} width="500" /> : <div><p>{each.description}</p></div>}
            </div>
            <h2>{each.title}</h2>
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
            <br />
        </div>
    )
}

export default GalleryItem;