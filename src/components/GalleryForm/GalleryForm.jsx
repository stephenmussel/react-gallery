function GalleryForm() {
    return(
        <>
            <h1>Gallery Form</h1>
            <form>
                <input 
                    type="text"
                    placeholder="url"
                    style={{marginBottom: 5}}
                /><br />
                <input 
                    type="text"
                    placeholder="title"
                    style={{marginBottom: 5}}
                /><br />
                <textarea 
                    type="text"
                    rows="5"
                    cols="21"
                    placeholder="description"
                    style={{marginBottom: 5}}
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