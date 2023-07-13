showData();
function showData(filter = "all") {
  selected = document.querySelectorAll(".selected");
  if(selected.length > 0){
    selected[0].classList.remove("selected");
  }
  document.getElementById(filter).classList.add("selected");
  apiURL = "https://restcountries.com/v3.1"

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
        myDiv = document.createElement("div")
        myDiv.className = "card"
        myDiv.innerHTML = "<img src=" + data[i].flags.png + "></img> " + data[i].translations.por.common
        currency = ""
        if(data[i].currencies != null){
          currency = " - Currency: " + Object.entries(data[i].currencies)[0][1].name + " (" + Object.entries(data[i].currencies)[0][1].symbol + ")"
        }
        myDiv.innerHTML = myDiv.innerHTML + currency
        document.getElementById("data").appendChild(myDiv)
      }
    })
    .catch(error => {
      console.error(error);
    });
}
