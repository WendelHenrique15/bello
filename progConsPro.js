let consultPro = document.getElementById('consultPro')
let resConsPro = document.getElementById('resConsPro')

consultPro.addEventListener('click', (e) => {
    e.preventDefault()

    let codProduto = document.getElementById('codProduto').value

    fetch(`http://localhost:8081/produto/${codProduto}`, {
        method: 'GET'
    })
    .then(resp => resp.json())
    .then(produto => {
        resConsPro.innerHTML = ``
        resConsPro.innerHTML += `Nome: ${produto.nome}<br>`
        resConsPro.innerHTML += `Quantidade: ${produto.quantidade}<br>`
        resConsPro.innerHTML += `Preço: ${produto.preco}<br>`
        resConsPro.innerHTML += `Total: ${produto.total}<br>`
    })
    .catch(err => {
        console.error('Erro ao consultar o produto', err)
    })
})