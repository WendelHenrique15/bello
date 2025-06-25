let consultEnt = document.getElementById('consultEnt')
let resConsEnt = document.getElementById('resConsEnt')

consultEnt.addEventListener('click', (e) => {
    e.preventDefault()

    let codEntrega = document.getElementById('codEntrega').value

    fetch(`http://localhost:8081/entrega/${codEntrega}`, {
        method: 'GET'
    })
    .then(resp => resp.json())
    .then(entrega => {
        resConsEnt.innerHTML = ``
        resConsEnt.innerHTML += `logradouro: ${entrega.logradouro}<br>`
        resConsEnt.innerHTML += `Complemento: ${entrega.complemento}<br>`
        resConsEnt.innerHTML += `Bairro: ${entrega.bairro}<br>`
        resConsEnt.innerHTML += `localidade: ${entrega.localidade}<br>`
        resConsEnt.innerHTML += `Estado: ${entrega.uf}<br>`
        resConsEnt.innerHTML += `Nome do Responsavel: ${entrega.nomeResponsavel}<br>`
    })
    .catch(err => {
        console.error('Erro ao consultar o produto', err)
    })
})