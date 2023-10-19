const express = require("express");
const router = express.Router();
const { callLaas } = require("../service/laas");

router.post("/", async (req, res) => {
    const result = await callLaas(req.body);
    res.status(200).json({ result });
});

module.exports = router;
