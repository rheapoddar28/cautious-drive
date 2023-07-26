const express = require('express');
const router = express.Router();

const connect = require('../db/connection');
const MySchema = require('../model/AccSchema');

router.get('/', (req, res) => {
    res.send("Hello world from the server router.js");
});

router.post('/accidentdetails', async (req, res) => {
    const { latitude, longitude, date_time, area, cause } = req.body;
    if (!latitude || !longitude || !date_time || !area || !cause) {
        return res.status(422).json({ error: "Please fill all fields properly" });
    }
    const newDocument = new MySchema({
        'latitude': latitude,
        'longitude': longitude,
        'date_time': date_time,
        'area': area,
        'cause': cause
    });

    try {
        const collection = await connect();
        const result = await collection.insertOne(newDocument);
        console.log(newDocument);
        res.status(200).send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error inserting document");
    }
});

module.exports = router;