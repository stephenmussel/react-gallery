function GalleryForm({ handleSubmit, setPath, setTitle, setDescription, path, title, description }) {

    return(
        <>
            <h1>Add New Photos</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="url"
                    style={{marginBottom: 5}}
                    onChange={(event) => setPath(event.target.value)}
                    value={path}
                /><br />
                <input 
                    type="text"
                    placeholder="title"
                    style={{marginBottom: 5}}
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                /><br />
                <textarea 
                    type="text"
                    rows="5"
                    cols="21"
                    placeholder="description"
                    style={{marginBottom: 5}}
                    onChange={(event) => setDescription(event.target.value)}
                    value={description}
                ></textarea><br />
                <input 
                    type="submit"
                    value="Add"
                />
            </form>
            <br /><br />
        </>
    )
}

export default GalleryForm;