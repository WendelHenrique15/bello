let puxarCep = document.getElementById("puxarCep")
let cadEnt = document.getElementById("cadEnt")
let resCadEnt = document.getElementById("resCadEnt")

puxarCep.addEventListener("click", (e)=>{
    e.preventDefault()

    let cep = document.getElementById("cep").value

    fetch(`http://viacep.com.br/ws/${cep}/json/`, {
    })
    .then(resposta => resposta.json())
    .then(dados => {
      document.getElementById("logradouro").value = dados.logradouro
      document.getElementById("complemento").value = dados.complemento
      document.getElementById("bairro").value = dados.bairro
      document.getElementById("localidade").value = dados.localidade
      document.getElementById("uf").value = dados.uf
    } )
    .catch((err)=>{
        console.error("Erro: ", err)
    })

})

cadEnt.addEventListener("click", (e)=>{
    e.preventDefault()

    let logradouro = document.getElementById("logradouro").value
    let complemento = document.getElementById("complemento").value
    let bairro = document.getElementById("bairro").value
    let localidade = document.getElementById("localidade").value
    let uf = document.getElementById("uf").value
    let nomeResponsavel = document.getElementById("nomeResponsavel").value
    let data = document.getElementById("data").value

    const valores = {
      logradouro: logradouro,
      complemento: complemento,
      bairro: bairro,
      localidade: localidade,
      uf: uf,
      nomeResponsavel: nomeResponsavel,
      data: data,
    }

    fetch(`http://localhost:8081/entrega`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.body)
    .then(dadoss =>{
      resCadEnt.innerHTML = ` `
      resCadEnt.innerHTML += `Logradouro: ${logradouro} <br>`
      resCadEnt.innerHTML += `Complemento: ${complemento} <br>`
      resCadEnt.innerHTML += `Bairro: ${bairro} <br>`
      resCadEnt.innerHTML += `Localidade: ${localidade} <br>`
      resCadEnt.innerHTML += `Uf: ${uf} <br>`
      resCadEnt.innerHTML += `Responsavel: ${nomeResponsavel} <br>`
      resCadEnt.innerHTML += `Data: ${data} <br>`

    })
    .catch((err)=>{
        console.error("Erro: ", err)
    })

})