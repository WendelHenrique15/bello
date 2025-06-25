let cadPro = document.getElementById("cadPro")
let resCadPro = document.getElementById("resCadPro")


cadPro.addEventListener("click", (e) => {
    e.preventDefault()

    let nome = document.getElementById("nome").value
    let quantidade = Number(document.getElementById("quantidade").value)
    let preco = Number(document.getElementById("preco").value)
    let total = Number(document.getElementById("total").value)
    let codEntrega = Number(document.getElementById("codEntrega").value)

    const valor = {
        nome: nome,
        quantidade: quantidade,
        preco: preco,
        total: total,
        entrega: {
            codEntrega: codEntrega,
        }
    }

    fetch(`http://localhost:8081/produto`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(valor)
    })
    .then(resp => {
        if (!resp.ok) throw new Error(`Erro HTTP! Status: ${resp.status}`)
        return resp.json()
    })
    .then(dadoss => {
        resCadPro.innerHTML = ``
        resCadPro.innerHTML += `Nome produto: ${dadoss.nome} <br>`
        resCadPro.innerHTML += `Quantidade: ${dadoss.quantidade} <br>`
        resCadPro.innerHTML += `Preço: ${dadoss.preco} <br>`
        resCadPro.innerHTML += `Total: ${dadoss.total} <br>`
    })
    .catch((err) => {
        console.error("Erro: ", err)
        resCadPro.innerHTML = `Erro ao cadastrar: ${err.message}`
    })
})
