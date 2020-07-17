const axios = require('axios');
const API = 'http://localhost:3002'


let AllAdditional;
let type;

async function GetAdditional() {
  const response = await axios.get(API + "/adicionais");
  AllAdditional = response.data
  type = 'ADICIONAIS'
  return AllAdditional
}

// GetAdditional()
// setTimeout(() => {
//   console.log(` --------------------- ${type} ----------------------`)
//   console.log(AllAdditional)
//   console.log(" -----------------------------------------------------")
// }, 3000)

module.exports = GetAdditional;