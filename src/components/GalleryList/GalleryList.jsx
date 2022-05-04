import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css';
import Paper from '@mui/material/Paper';


function GalleryList({ gallery, heartPhoto, deletePhoto }) {
    return (
        <div className="gallery-container">
            {gallery.map(each => (
                <Paper elevation={5} key={each.id}>
                    <GalleryItem
                        // key={each.id}
                        each={each}
                        heartPhoto={heartPhoto}
                        deletePhoto={deletePhoto}
                    />
                </Paper>
            ))}
        </div>
    )
}

export default GalleryList;