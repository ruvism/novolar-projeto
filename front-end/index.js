window.onload = function () {
  showAnimais();
};

const url = 'https://novolar.herokuapp.com/'

function getAnimais() {
  return axios.get(`${url}api/index`)
    .then(function (response) {
      return response;
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

