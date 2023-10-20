const express = require("express");
const { callLaas } = require("../service/laas");
const asyncify = require("express-asyncify").default;
const router = asyncify(express.Router());


router.post("/", async (req, res) => {
    const result = await callLaas(req.body);
    // console.log(result)
    res.status(200).json({ result });
});

module.exports = router;
