let codAtu = document.getElementById('codAtu')
let atuLogr = document.getElementById('atuLogr')
let atuComp = document.getElementById('atuComp')
let atuBairro = document.getElementById('atuBairro')
let atuLoc = document.getElementById('atuLoc')
let atuUf = document.getElementById('atuUf')
let atuNomeResp = document.getElementById('atuNomeResp')
let atuData = document.getElementById('atuData')
let atualizarent = document.getElementById('atualizarent')
let resAtuEnt = document.getElementById('resAtuEnt')
let puxarEnt = document.getElementById('puxarEnt')

puxarEnt.addEventListener("click", (e)=>{
  e.preventDefault()

  let codEntrega = document.getElementById("codEntrega").value

  fetch(`http://localhost:8081/entrega/${codEntrega}`, {
  })
  .then(resposta => resposta.json())
  .then(dados => {
    document.getElementById("atuLogr").value = dados.logradouro
    document.getElementById("atuComp").value = dados.complemento
    document.getElementById("atuBairro").value = dados.bairro
    document.getElementById("atuLoc").value = dados.localidade
    document.getElementById("atuUf").value = dados.uf
    document.getElementById("atuNomeResp").value = dados.nomeResponsavel
    document.getElementById("atuData").value = dados.data
  })
  .catch((err)=>{
      console.error("Erro: ", err)
  })

})

atualizarent.addEventListener('click', (e) => {
    e.preventDefault()

    let codEntrega = Number(document.getElementById('codEntrega').value)

    const entregaAtualizada = {
        codEntrega: codEntrega,
        logradouro: atuLogr.value,
        complemento: atuComp.value,
        bairro: atuBairro.value,
        localidade: atuLoc.value,
        uf: atuUf.value,
        nomeResponsavel: atuNomeResp.value,
        data: atuData.value
      }
      
  
    fetch(`http://localhost:8081/entrega/${codEntrega}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(entregaAtualizada)
    })
      .then(resp => resp.json())
      .then(retorno => {
        resAtuEnt.innerHTML = ` `
        resAtuEnt.innerHTML += `Produto atualizado com sucesso!<br><br>`
        resAtuEnt.innerHTML += `Logradouro: ${retorno.logradouro} <br>`
        resAtuEnt.innerHTML += `Complemento: ${retorno.complemento} <br>`
        resAtuEnt.innerHTML += `Bairro: ${retorno.bairro} <br>`
        resAtuEnt.innerHTML += `Localidade: ${retorno.localidade} <br>`
        resAtuEnt.innerHTML += `Estado: ${retorno.uf} <br>`
        resAtuEnt.innerHTML += `Nome do responsável: ${retorno.nomeResponsavel} <br>`
        resAtuEnt.innerHTML += `Data: ${retorno.data}`

      })
      .catch(err => {
        console.error('Erro ao atualizar o produto:', err)
      })
  })