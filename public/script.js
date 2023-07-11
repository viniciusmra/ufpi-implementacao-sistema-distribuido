var allData
fetch('https://restcountries.com/v3.1/lang/portuguese')
  .then(response => response.json())
  .then(data => {
    console.log(data[0])
    for(let i = 0; i < data.length; i++){
        if(data[i].capital == undefined){
            continue
        }
        myDiv = document.createElement("div")
        myDiv.className = "city"
        myDiv.innerHTML = "<img src=" + data[i].flags.png +"></img> " + data[i].translations.por.common
        document.getElementById("data").appendChild(myDiv)
    }
    //createElement('span')

    
  })
  .catch(error => {
    console.error(error);
});



// createElement('span')

// for(let i = 0; i < len())
