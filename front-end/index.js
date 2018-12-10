window.onload = function () {
    //alert("carregou");
    showAnimais();
  };
  
  function getAnimais() {
    return [];
  }
  
  
  function adicionarAnimal () {
      
      let enviarAnimal
      = document.getElementById("botao-enviar");
      enviarAnimal.addEventListener('click', function(event){
        event.preventDefault();
      })
  
      let novaAdocao =  {
        "animal": {
            "id": " ",
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
  
      axios.post('http://localhost:3000/api/doar', novaAdocao)
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
      
      
      
      function showAnimais(){
        
        let animaisDiv = document.getElementById("animais");
        animaisDiv.innerHTML = `
        ${getAnimais().map((animal) => `
        <div class="animal">
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
          `).join("")}
          `
         
         
     return axios.get('http://localhost:3000/api/doar').then(showAnimais)  
    }
  
    // // usar axios para mandar as requisições para o back
    // const axios = require('axios')
  
    // const configuracoes = {
    //   baseURL: 'http://localhost:5000/api'
    // }
  
    // const api = axios.create(configuracoes)
  
    // api
    // .post('http://localhost:5000/api/doar', animaisDiv)
    // //.then(response => this.Animal = response.data.showAnimais)
  
