import { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteRounded from '@mui/icons-material/DeleteRounded';

function GalleryItem({ each, heartPhoto, deletePhoto }) {

    const [click, setClick] = useState(true);

    return (
        <div key={each.id}>
            <div onClick={() => click === true ? setClick(false) : setClick(true)}>
                {click ? <img src={each.path} width="500"/> : <div><p>{each.description}</p></div>}
            </div>
            <h2>{each.title}</h2>
            <p>
                &#10084;&#65039;
                &nbsp;&nbsp;
                {each.likes}
            </p>
            <Button variant="contained" onClick={() => heartPhoto(each.id)} style={{marginRight: 5}}>Like</Button>
            <DeleteRounded onClick={() => deletePhoto(each.id)}>Delete</DeleteRounded>
            <br /><br />
        </div>
    )
}

export default GalleryItem;