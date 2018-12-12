window.onload = function () {
  showAnimais();
};

function getAnimais() {
  return axios.get('http://127.0.0.1:3000/api/index')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log("Tente novamente");
    })
}

let enviarAnimal
  = document.getElementById("formulario");
enviarAnimal.addEventListener('submit', function (event) {
  event.preventDefault();
  adicionarAnimal()
  alert("Animal cadastrado com sucesso")
  enviarAnimal.reset()
})

function adicionarAnimal() {
  let novaAdocao = {
    "animal": {
      "name": document.getElementById("novo-animal").value,
      "description": document.getElementById("descricao").value,
      "images": [document.getElementById("imagem").value],
      "email": document.getElementById("contato-email").value,
      "telefone": document.getElementById("contato-telefone").value
    }
  }
  

  axios.post('http://127.0.0.1:3000/api/doar', novaAdocao)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log("Tente novamente");
    })
}

function showAnimais() {
  let animaisDiv = document.getElementById("animais");
  getAnimais().then((animais) => {
    animais.data.map(animal => {
      animaisDiv.innerHTML +=
        ` <div class="animal">
          <img src="${animal["animal"]["images"]}" class="animal-img" />
          <div class="text-name">
          <h4 class="animal-name">${animal["animal"]["name"]}</h4>
          </div>
          <div class="descricao">
          <p class="animal-name">${animal["animal"]["description"]}</p>
          </div>
          <div class="animal-contact">        
          <p class="animal-contact">${animal["animal"]["email"]}</p>    
          <p class="animal-contact">${animal["animal"]["telefone"]}</p>
          </div>
          </div>
          `
    })
  })
}

