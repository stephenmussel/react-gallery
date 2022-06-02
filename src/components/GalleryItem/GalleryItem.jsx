import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import '../GalleryItem/GalleryItem.css';

function GalleryItem({ each, heartPhoto, deletePhoto, dislikePhoto }) {

    const [click, setClick] = useState(true);

    return (
        <div key={each.id} className="item-container">
            <h2 className="photo-title">{each.title}</h2>

            {/* Conditionally renders photo or description when either is clicked. When a photo 
            is clicked, the the class of the photo is changed to `reduce-opacity`. This makes the 
            description more legible by reducing the opacity of the photo. When the description is
            clicked, the photo is displayed. */}
            <div className="photo-container">
                <img
                    src={each.path}
                    alt="gallery photo"
                    onClick={() => click ? setClick(false) : setClick(true)}
                    className={click ? "" : "reduce-opacity"}
                />
                <p className="photo-description"
                    onClick={() => click ? setClick(false) : setClick(true)}
                >
                    {click ? "" : each.description}
                </p>
            </div>

            {/* Conditionally renders a filled heart or outlined heart based on the like count. If there
            are 0 likes, the outlined heart is displayed. */}
            <div className="heart-delete-container">
                <div>
                    {each.likes ?
                        <IconButton onClick={() => heartPhoto(each.id)}>
                            <FavoriteIcon color="secondary" style={{ marginRight: 5 }} />
                            {each.likes}
                        </IconButton> :
                        <IconButton onClick={() => heartPhoto(each.id)}>
                            <FavoriteBorderIcon color="secondary" style={{ marginRight: 5 }} />
                            {each.likes}
                        </IconButton>
                    }
                </div>

                {/* TODO: what to do with this feature (dislike button)? */}
                {/* <div>
                    {each.dislikes ?
                        <IconButton onClick={() => dislikePhoto(each.id)}>
                            <ThumbDownAltIcon color="secondary" style={{ marginRight: 5 }} />
                            {each.dislikes}
                        </IconButton> :
                        <IconButton onClick={() => dislikePhoto(each.id)}>
                            <ThumbDownOffAltIcon color="secondary" style={{ marginRight: 5 }} />
                            {each.dislikes}
                        </IconButton>
                    }
                </div> */}
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
        </div>


    )
}

export default GalleryItem;