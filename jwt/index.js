const jwt = require("jsonwebtoken");

const SECRET_INGREDIENT = "crappy batty";

function encodeData(data) {
  const encoded = jwt.sign(data, SECRET_INGREDIENT);
  return encoded;
}

function decodeData(encodedData) {
  const data = jwt.verify(encodedData, SECRET_INGREDIENT);
  return data;
}

module.exports = {
  encodeData,
  decodeData,
};
