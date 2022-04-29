import { useState } from 'react';

function GalleryItem({each}) {

    const [click, setClick] = useState(true);
    return(
        <div key={each.id}>
            <div onClick={() => click === true ? setClick(false) : setClick(true)}>
                {click ? <img src={each.path}/> : <div><h1>{each.description}</h1></div>}
            </div>

            
            {/* <h2>{each.title}</h2> */}
            {/* <p>{each.likes}</p> */}
        </div>
    )
}

export default GalleryItem;