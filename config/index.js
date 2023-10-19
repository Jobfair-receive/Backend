require("dotenv").config();
const env = process.env;

const laas = {
  projectCode: env.LAAS_PROJECT_CODE,
  apiKey: env.LAAS_PROJECT_API_KEY,
  hash: env.LAAS_PRESET_HASH,
  endpoint: env.LAAS_ENDPOINT
}

module.exports = laas;