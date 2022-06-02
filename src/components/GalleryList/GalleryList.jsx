import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css';
import Paper from '@mui/material/Paper';


function GalleryList({ gallery, heartPhoto, deletePhoto, dislikePhoto }) {
    return (
        <div className="gallery-container">

            {/* The map function passes info for each photo into the GalleryItem component. 
            The heartPhoto and deletePhoto functions are passed via props. */}
            {gallery.map(each => (
                <Paper elevation={5} key={each.id}>
                    <GalleryItem
                        // key={each.id}
                        each={each}
                        heartPhoto={heartPhoto}
                        deletePhoto={deletePhoto}
                        dislikePhoto={dislikePhoto}
                    />
                </Paper>
            ))}
        </div>
    )
}

export default GalleryList;