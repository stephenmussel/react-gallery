import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({gallery}) {
    return(
        <>
        {gallery.map(each => (
            <GalleryItem 
                key={each.id}
                each={each}
            />
        ))}
        </>
    )
}

export default GalleryList;