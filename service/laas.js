const { laas} = require("../config");
const axios = require("axios");

const callLaas = (dto) => {
    let params = {};
    Object.entries(dto).forEach(([key, value]) => params[key] = value.toString());

    const headers = {
        headers: {
            project: process.env.projectCode,
            apiKey: process.env.apiKey,
            "Content-Type": "application/json"
        }
    }

    const body = {
        hash: process.env.hash,
    }

    return axios.post(process.env.endpoint, body, headers)
        .then(res => {
            return res.data.choices[0].message.content;
        })
        .catch(err => {
            console.log(err)
            return err;
        });
}

module.exports = { callLaas }

