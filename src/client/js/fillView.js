function fillView(receivedData) {
  console.log("status data:", receivedData["status"]);
  if (receivedData.status.code == 0) {
    const { agreement, subjectivity, confidence, irony } = receivedData;
    document.getElementById("agreement").innerHTML = `Agreement:${agreement}`;
    document.getElementById(
      "subjectivity"
    ).innerHTML = `Subjectivity:${subjectivity}`;
    document.getElementById("irony").innerHTML = `Irony:${irony}`;
    document.getElementById(
      "confidence"
    ).innerHTML = `Confidence:${confidence}%`;

    // entity list:${receivedData.sentimented_entity_list}`;
    // const list=document.createElement("ul")
    // const item=document.createElement("li")
    // item.
  } else {
    document.getElementById("results").innerHTML =
      "Error while fetching data. Please make sure the server is running and that you have internet connection.";
  }
  // let receivedData = {};
  // console.log(receivedData);
}
export { fillView };
