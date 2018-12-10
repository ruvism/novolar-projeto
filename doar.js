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
       // console.log(response);
      })
      .catch(function (error) {
        console.log("Tente novamente");
      });
              
    }