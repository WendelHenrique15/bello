let listarEnt = document.getElementById('listarEnt')
let resListEnt = document.getElementById('resListEnt')

listarEnt.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`http://localhost:8081/entrega`, {
        method: 'GET'
    })
    .then(resp => {
        if (!resp.ok) throw new Error(`Erro HTTP! Status: ${resp.status}`)
        return resp.json()
    })
    .then(entregas => {
        entregas.forEach(entregas => {
            resListEnt.innerHTML += `
            Logradouro: ${entregas.logradouro}<br>
            Complemento: ${entregas.complemento}<br>
            Bairro: ${entregas.bairro}<br>
            Localidade: ${entregas.localidade}<br>
            Estado: ${entregas.uf}<br>
            Nome do Responsavel: ${entregas.nomeResponsavel}<br><br><hr>`
    })
})
    .catch(err => {
        console.error('Erro ao listar os produtos', err)
    })
})