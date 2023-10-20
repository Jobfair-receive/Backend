const axios = require("axios");
require("dotenv").config();

const callLaas = (dto) => {
    let params = {};

    const headers = {
        headers: {
            project: process.env.LAAS_PROJECT_CODE,
            apiKey: process.env.LAAS_PROJECT_API_KEY,
            "Content-Type": "application/json"
        }
    }

    const body = {
        hash: process.env.LAAS_PRESET_HASH_SAMPLE,
        "params": dto
    }

    return axios.post("https://api-laas.wanted.co.kr/api/preset/chat/completions", body, headers)
        .then(res => {
            return res.data.choices[0].message.content;
        })
        .catch(err => {
            console.log(err.message, err.response.status, err.response.data)
            return err.message;
    });    
}

module.exports = { callLaas }

