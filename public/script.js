// Chama a função getData assim que o script é carregado
getData("all")


// Faz uma requisição GET ao servidor passando os parametros que deseja receber como resposta
function getData(filter){
  // Verifica os dados solicitados já são os que estão sendo exibidos na tela, para evitar uma nova chamada na api
  if(document.getElementById(filter).classList.contains("selected")){
    return
  }

  // Faz o tratamento do estado dos botões
  selected = document.querySelectorAll(".selected");
  if(selected.length > 0){
    selected[0].classList.remove("selected");
  }
  document.getElementById(filter).classList.add("selected");

  
  if(filter != "all"){
    filter = `lang/${filter}`
  }

  // Chamada da back-end
  fetch(`/get-data?data_filter=${filter}`)
    .then(response => response.json())
    .then(data => {
      showData(data) // Chama a função showData
    })
    .catch(error => {
      console.error(error);
    });
}

// Constroi os elementos da interface gráfica
function showData(data){
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
}