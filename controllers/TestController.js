const express = require("express");
const asyncify = require("express-asyncify").default;
const router = asyncify(express.Router());
const axios = require("axios");
require("dotenv").config();
const { result1 } = require("../service/result1");
const { result2 } = require("../service/result2");
const { result3 } = require("../service/result3");

router.post("/", async (req, res) => {
    try {
        const answer1 = await result1(req.body);
        const answer2 = await result2(req.body);
        const answer3 = await result3(req.body);
        
        res.json({
            answer1: answer1,
            answer2: answer2,
            answer3: answer3
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;
