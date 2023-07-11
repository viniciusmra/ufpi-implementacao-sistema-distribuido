showData();
function showData(filter = "all") {
  apiURL = "https://restcountries.com/v3.1/"

  if (filter == "all") {
    apiURL = apiURL + "/"
  } else {
    apiURL = apiURL + "/lang/"
  }
  
  apiURL = apiURL + filter
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      document.getElementById("data").innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        if (data[i].capital == undefined) {
          continue
        }
        myDiv = document.createElement("div")
        myDiv.className = "city"
        myDiv.innerHTML = "<img src=" + data[i].flags.png + "></img> " + data[i].translations.por.common
        document.getElementById("data").appendChild(myDiv)
      }
    })
    .catch(error => {
      console.error(error);
    });
}
