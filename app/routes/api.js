// app/routes.js

var express = require('express');
var Beer = require('../models/beer');

var router = express.Router();


// server routes ===========================================================

// GET all beers
router.get('/beers', function(req, res) {
    Beer.find(function(err, beers) {
        if (err)
            res.send(err);
        res.json(beers);
    });
});

// POST create a beer
router.post('/beers', function (req, res) {
    var beer = new Beer();
    beer.name = req.body.name;
    beer.brewer = req.body.brewer;
    beer.style = req.body.style;
    beer.abv = req.body.abv;

    beer.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: "beer successfully created" });
    });
});

// GET a beer
router.get('/beers/:beer_id', function (req, res) {
    Beer.findById(req.params.beer_id, function (err, beer) {
        if (err)
            res.send(err);
        res.json(beer);
    });
});

// PUT modify a beer
router.put('/beers/:beer_id', function (req, res) {
    Beer.findById(req.params.beer_id, function (err, beer) {
        if (err)
            res.send(err);
        beer.name = req.body.name;
        beer.brewer = req.body.brewer;
        beer.style = req.body.style;
        beer.abv = req.body.abv;

        beer.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: "beer successfully modified" });
        });
    });
});

// DELETE a beer
router.delete('/beers/:beer_id', function (req, res) {
    Beer.remove(req.params.beer_id, function (err, beer) {
        if (err)
            res.send(err);
        res.json({ message: "beer successfully removed" });
    });
});

module.exports = router;
