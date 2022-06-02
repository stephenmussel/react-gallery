const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// GET route
// Sends photos and info
router.get('/', (req, res) => {
    console.log('in router.get');

    const queryText = `SELECT * FROM "photos" ORDER BY "id" DESC;`;
    pool.query(queryText)
        .then(result => {
            console.log('pics from the DB: ', result);
            res.send(result.rows) 
        }).catch(error => {
            alert('error in fetching pics from DB: ', error);
            res.sendStatus(500);
        });
}); // END GET route

// PUT route
// Updates like count for each photo
router.put('/like/:id', (req, res) => {
    console.log('in router.put');

    const photoId = req.params.id;
    console.log('photoId: ', photoId);
    const queryText = `UPDATE "photos" SET "likes" = "likes" + 1 WHERE "id" = $1;`;
    pool.query(queryText, [photoId])
        .then(result => {
            console.log('updated likes w/photoId: ', photoId);
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('error: ', error);
            alert('error in liking photo!');
            res.sendStatus(500);
        });
}); // END PUT route

// PUT route to update dislike count for each photo
router.put('/dislike/:id', (req, res) => {
    console.log('in dislike route');

    const photoId = req.params.id;
    console.log('dislike photoId:', photoId);
    const queryText = `UPDATE photos SET dislikes = dislikes - 1 WHERE id = $1;`;
    pool.query(queryText, [photoId])
        .then(result => {
            console.log('updated dislikes w/photoId', photoId);
            res.sendStatus(200);
        })
        .catch(err => {
            console.log('err in disliking', err);
            res.sendStatus(500);
        })

})

// POST route
// Adds new photo
router.post('/', (req, res) => {
    console.log('in router.post');

    const newPhoto = req.body;
    console.log('newPhoto: ', newPhoto);
    const queryText = `INSERT INTO "photos" ("path", "title", "description")
                    VALUES ($1, $2, $3);`;
    pool.query(queryText, [
        newPhoto.path,
        newPhoto.title,
        newPhoto.description
    ])
        .then(result => {
            console.log('photo added: ', newPhoto);
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error: ', error);
            alert('error in adding photo!')
            res.sendStatus(500)  
        });
}); // END POST route

// DELETE route
// Deletes photo
router.delete('/:id', (req, res) => {
    console.log('in router.delete');

    const photoId = req.params.id
    console.log('photoId: ', photoId);
    const queryText = `DELETE FROM "photos" WHERE "id" = $1;`;
    pool.query(queryText, [photoId])
        .then(result => {
            console.log('deleted photo with ID: ', photoId);
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('error: ', error);
            alert('error in deleting photo!')
            res.sendStatus(500)
        });
}); // END DELETE route

module.exports = router;