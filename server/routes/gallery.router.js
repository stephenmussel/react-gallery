const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// // PUT Route w/o database
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

// // GET Route w/o database
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

// GET route
router.get('/', (req, res) => {
    console.log('in router.get');

    const queryText = `SELECT * FROM "photos" ORDER BY "id";`;
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
});

// POST route
router.post('/', (req, res) => {
    console.log('in router.post');

    const newPhoto = req.body;
    console.log('newPhoto: ', newPhoto);
    const queryText = `INSERT INTO "photos" ("title")
                    VALUES ($1);`;
    pool.query(queryText, [newPhoto.title])
        .then(result => {
            console.log('photo added: ', newPhoto);
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error: ', error);
            alert('error in adding photo!')
            res.sendStatus(500)  
        });
});

module.exports = router;