function GalleryItem({each}) {
    return(
        <div key={each.id}>
            <img src={each.path} />
            <h2>{each.title}</h2>
            <p>{each.description}</p>
            <p>{each.likes}</p>
        </div>
    )
}

export default GalleryItem;