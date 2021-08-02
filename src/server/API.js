const axios = require("axios");
const FormData = require("form-data");
const dotenv = require("dotenv");

dotenv.config();

const parseText = async (req) => {
  const data = new FormData();
  console.log(req);
  data.append("lang", "auto");
  data.append("key", process.env.API_KEY);
  if (req.txt) {
    data.append("txt", req.txt);
  } else if (req.url) {
    data.append("url", req.url);
  }

  const result = await axios({
    method: "post",
    url: "https://api.meaningcloud.com/sentiment-2.1",
    headers: {
      ...data.getHeaders(),
    },
    data: data,
  });

  try {
    const resultData = JSON.stringify(result.data);
    return resultData;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = parseText;
