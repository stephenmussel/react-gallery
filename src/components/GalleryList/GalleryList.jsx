import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ gallery, heartPhoto, deletePhoto }) {
    return(
        <>
        {gallery.map(each => (
            <GalleryItem 
                key={each.id}
                each={each}
                heartPhoto={heartPhoto}
                deletePhoto={deletePhoto}
            />
        ))}
        </>
    )
}

export default GalleryList;