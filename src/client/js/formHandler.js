const { isURL } = require("validator");
function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("textInput").value;
  if (isURL(formText)) {
    //prettier-ignore
    formText = { "url": formText };
    document.getElementById("dataType").innerHTML = "Submitted data is a URL";
  } else {
    //prettier-ignore
    formText = { "txt": formText };
    document.getElementById("dataType").innerHTML = "Submitted data is Text";
  }
  fetch("http://localhost:8081/test", {
    method: "POST",
    credentials: "omit",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formText),
  })
    .then((res) => {
      return res.text();
    })
    .then(function (res) {
      Client.fillView(JSON.parse(res));
    })
    .catch((e) => {
      console.log(e);
    });
}

export { handleSubmit };
