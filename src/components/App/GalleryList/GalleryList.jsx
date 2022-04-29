function GalleryList({gallery}) {
    return(
        <>
        {gallery.map(each => (
          <div>
            <img src={each.path} />
            <h2>{each.title}</h2>
            <p>{each.description}</p>
            <p>{each.likes}</p>
          </div>
        ))}
        </>
    )
}

export default GalleryList;