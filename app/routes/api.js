// app/routes.js

var express = require('express');
var Object = require('../models/object');

var router = express.Router();

// server routes ===========================================================

// GET all objects
router.get('/objects', function(req, res) {
    Object.find(function(err, objects) {
        if (err)
            res.send(err);
        res.json(objects);
    });
});

// POST create an object
router.post('/objects', function (req, res) {
    var object = new Object();
    object.name = req.body.name;
    object.description = req.body.description;

    object.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: "object successfully created" });
    });
});

// GET an object
router.get('/objects/:object_id', function (req, res) {
    Object.findById(req.params.object_id, function (err, object) {
        if (err)
            res.send(err);
        res.json(object);
    });
});

// PUT modify an object
router.put('/objects/:object_id', function (req, res) {
    Object.findById(req.params.object_id, function (err, object) {
        if (err)
            res.send(err);
        object.name = req.body.name;
        object.description = req.body.description;

        object.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: "object successfully modified" });
        });
    });
});

// DELETE an object
router.delete('/objects/:object_id', function (req, res) {
    Object.remove(req.params.object_id, function (err, object) {
        if (err)
            res.send(err);
        res.json({ message: "object successfully removed" });
    });
});

module.exports = router;
