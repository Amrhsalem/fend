var axios = require("axios");
var FormData = require("form-data");
const dotenv = require("dotenv");
const prettyjson = require("prettyjson");
dotenv.config();

const parsedText = async (req) => {
  var data = new FormData();
  console.log(req);
  data.append("lang", "auto");
  data.append("key", process.env.API_KEY);
  if (req.txt) {
    data.append("txt", req.txt);
  } else if (req.url) {
    data.append("url", req.url);
  }
  console.log("req from api:", data);
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

module.exports = parsedText;
