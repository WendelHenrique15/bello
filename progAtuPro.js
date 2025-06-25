let atuNome = document.getElementById('atuNome')
let atuQuantidade = document.getElementById('atuQuantidade')
let atuPreco = document.getElementById('atuPreco')
let atuTotal = document.getElementById('atuTotal')
let codProduto = document.getElementById('codProduto')
let puxarAtu = document.getElementById('puxarAtu')
let atualizarpro = document.getElementById('atualizarpro')
let resAtuPro = document.getElementById('resAtuPro')


puxarAtu.addEventListener("click", (e)=>{
  e.preventDefault()

  let codProduto = document.getElementById("codProduto").value

  fetch(`http://localhost:8081/produto/${codProduto}`, {
  })
  .then(resposta => resposta.json())
  .then(dados => {
    document.getElementById("atuNome").value = dados.nome
    document.getElementById("atuQuantidade").value = dados.quantidade
    document.getElementById("atuPreco").value = dados.preco
    document.getElementById("atuTotal").value = dados.total
  })
  .catch((err)=>{
      console.error("Erro: ", err)
  })

})



atualizarpro.addEventListener('click', (e) => {
  e.preventDefault()

  let codProduto = document.getElementById('codProduto').value

  const produtoAtualizado = {
    nome: atuNome.value,
    quantidade: atuQuantidade.value,
    preco: atuPreco.value,
    total: atuTotal.value
  }

  fetch(`http://localhost:8081/produto/${codProduto}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(produtoAtualizado)
  })
    .then(resp => resp.json())
    .then(retorno => {
        resAtuPro.innerHTML = ``
        resAtuPro.innerHTML += `Produto atualizado com sucesso!<br><br>`
        resAtuPro.innerHTML += `Nome do produto: ${retorno.nome} <br>`
        resAtuPro.innerHTML += `Quantidade: ${retorno.quantidade} <br>`
        resAtuPro.innerHTML += `Preço: ${retorno.preco} <br>`
        resAtuPro.innerHTML += `Total: ${retorno.total} <br>`


    })
    .catch(err => {
      resAtuPro.innerHTML += 'Erro ao atualizar o produto.'
    })
})