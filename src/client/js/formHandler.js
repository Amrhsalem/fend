import isURL from "validator/es/lib/isURL";

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  if (isURL(formText)) {
    console.log("validator: URL");
    //prettier-ignore
    formText = { "url": formText };
  } else {
    console.log("validator: text");
    //prettier-ignore
    formText = { "txt": formText };
  }
  console.log("::: Form Submitted :::");
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
      console.log(res);
      return res.text();
    })
    .then(function (res) {
      document.getElementById("results").innerHTML = res;
    })
    .catch((e) => {
      console.log(e);
    });
}

export { handleSubmit };
