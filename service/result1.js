const axios = require("axios");
require("dotenv").config();

const result1 = (dto) => {

    const headers = {
        headers: {
            project: process.env.LAAS_PROJECT_CODE,
            apiKey: process.env.LAAS_PROJECT_API_KEY,
            "Content-Type": "application/json"
        }
    }

    const body = {
        hash: process.env.LAAS_PRESET_TEST_HASH_SAMPLE_1,
        "params": {
            "msti": "바로 공부에 돌입하기 보다는 어떤 계획으로 합격할지 미리 계획을 세워두고 그대로 실행에 옮기는 전략적 수험생 스타일이다.공부법과 계획에 대한 욕심이 커서 계획은 완수되어야 한다고 생각한다. 스스로 판단하고 수립한 계획에 대한 신뢰가 매우 높고, 그로부터 비롯되는 자신감이 크다. 시험이나 성적과 관련이 없는 공부를 하는 것이 이상하게 느껴질 수 있다.",
            "mbti": "INTP"
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

module.exports = { result1 }

