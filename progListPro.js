let listarPro = document.getElementById('listarPro')
let resListPro = document.getElementById('resListPro')

listarPro.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`http://localhost:8081/produto`, {
        method: 'GET'
    })
    .then(resp => {
        if (!resp.ok) throw new Error(`Erro HTTP! Status: ${resp.status}`)
        return resp.json()
    })
    .then(produtos => {
        produtos.forEach(produto => {
          resListPro.innerHTML += `
            Nome do produto: ${produto.nome}<br>
            Quantidade: ${produto.quantidade}<br>
            Preço: ${produto.preco}<br>
            Total: ${produto.total}<br><br><hr>`
    })
})
    .catch(err => {
        console.error('Erro ao listar os produtos', err)

    })
})