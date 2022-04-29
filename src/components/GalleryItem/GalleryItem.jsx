import { useState } from 'react';
import axios from 'axios';

function GalleryItem({ each }) {

    const [click, setClick] = useState(true);

    const heartPhoto = (photoId) => {
        console.log('in heartPhoto');

    }

    return (
        <div key={each.id}>
            <div onClick={() => click === true ? setClick(false) : setClick(true)}>
                {click ? <img src={each.path} /> : <div><p>{each.description}</p></div>}
            </div>
            <h2>{each.title}</h2>
            <p>
                &#10084;&#65039;
                &nbsp;&nbsp;
                {each.likes}
            </p>
            <button onClick={() => heartPhoto(each.id)}>Like</button>
            <br /><br />
        </div>
    )
}

export default GalleryItem;