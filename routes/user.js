const express = require('express');
const router = express.Router();

router.get('/all', (req, res) => {
    res.send("all users")
})


router
    .route('/:id')
    .get(auth, (req, res) => {
        res.send("users with id" + req.params.id)
    })
    .put((req, res) => {
        res.send("add new user ")

    })
    .delete((req, res) => {
        res.send("get user with id" + req.params.id)

    })


function auth(req, res, next) {
    if (req.query.admin === true) {
        next()
        res.send('Auth')
    } else {
        res.send("No auth")
    }
}

module.exports = router