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
  
  const url = 'https://novolar.netlify.com/'


  axios.post(`${url}/api/doar`, novaAdocao)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log("Tente novamente");
    })
}