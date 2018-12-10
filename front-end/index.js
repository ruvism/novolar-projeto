window.onload = function () {
  //alert("carregou");
  showAnimais();
};

function getAnimais() {
  return axios.get('http://127.0.0.1:3000/api/index')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log("Tente novamente");
    })
}

let enviarAnimal
  = document.getElementById("botao-enviar");
enviarAnimal.addEventListener('click', function (event) {
  event.preventDefault();
  adicionarAnimal()
})

function adicionarAnimal() {


  let novaAdocao = {
    "animal": {
      "name": document.getElementById("novo-animal").value,
      "description": document.getElementById("descricao").value,
      "images": [document.getElementById("imagem").value],
      "contact": {
        "email": document.getElementById("contato-email").value,
        "telefone": document.getElementById("contato-telefone").value,
      }
    }
  };
  console.log(novaAdocao)

  axios.post('http://127.0.0.1:3000/api/doar', novaAdocao)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log("Tente novamente");
    });
}

// data["items"].push(novaAdocao);
// console.log(data)
// showAnimais();
// });
//}



function showAnimais() {
  let animaisDiv = document.getElementById("animais");
  //var div = '';
  // animaisDiv.innerHTML = `
  getAnimais().then((animais) => {
    animais.data.map(animal => {
      animaisDiv.append(  
        ` <div class="animal">
          <img src="${animal["animal"]["images"][0]}" class="animal-img" />
          <div class="text-name">
          <h4 class="animal-name">${animal["animal"]["name"]}</h4>
          </div>
          <div class="descricao">
          <p class="animal-name">${animal["animal"]["description"]}</p>
          </div>
          <div class="animal-contact">        
          <p class="animal-contact">${animal["animal"]["contact"]["email"]}</p>    
          <p class="animal-contact">${animal["animal"]["contact"]["telefone"]}</p>
          </div>
          </div>
          `

      )
        })
      })
    }



  //   })
  // }

