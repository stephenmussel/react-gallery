import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import '../GalleryForm/GalleryForm.css';


function GalleryForm({ handleSubmit, setPath, setTitle, setDescription, path, title, description }) {

    return (

        // Displays form elements to add new photo
        <div className="form-container">
            <h2>Add New Photos</h2>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                onSubmit={handleSubmit}
            >
                <div className="gallery-form">
                    <TextField
                        id="outlined"
                        label="URL"
                        variant="outlined"
                        onChange={(event) => setPath(event.target.value)}
                        value={path}
                    />
                    <TextField
                        id="outlined"
                        label="Title"
                        variant="outlined"
                        onChange={(event) => setTitle(event.target.value)}
                        value={title}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        multiline
                        maxRows={4}
                        onChange={(event) => setDescription(event.target.value)}
                        value={description}
                    ></TextField>
                    <Button variant="contained" type="submit" color="secondary">Add</Button>
                </div>
            </Box>
            <br /><br />
        </div>
    )
}

export default GalleryForm;