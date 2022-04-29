import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ gallery, heartPhoto }) {
    return(
        <>
        {gallery.map(each => (
            <GalleryItem 
                key={each.id}
                each={each}
                heartPhoto={heartPhoto}
            />
        ))}
        </>
    )
}

export default GalleryList;