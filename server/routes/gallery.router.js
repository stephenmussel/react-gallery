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
        });
}); // END GET route

module.exports = router;