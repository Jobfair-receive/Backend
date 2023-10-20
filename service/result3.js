const axios = require("axios");
require("dotenv").config();

const result3 = (dto) => {

    console.log(dto)

    const headers = {
        headers: {
            project: process.env.LAAS_PROJECT_CODE,
            apiKey: process.env.LAAS_PROJECT_API_KEY,
            "Content-Type": "application/json"
        }
    }

    const body = {
        hash: process.env.LAAS_PRESET_TEST_HASH_SAMPLE_3,
        "params": {
            dto
          }        
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

module.exports = { result3 }

