const express = require('express');
const manga_router = express.Router();
var mangas = require('../models/mangasModel');

manga_router.get('/:titleName', (req, res) => {
    const val = mangas.read(req.params.titleName);
    if (val) {
        res.send(val);
    } else {
        res.send({});
    }
});

manga_router.post('/create', (req, res) => {
    res.send(mangas.create(req.body.titleName, req.body.chapter, req.body.author));
});

module.exports = manga_router;
