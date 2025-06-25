let resDelPro = document.getElementById('resDelPro')
let deleteEnt = document.getElementById('deleteEnt')

deleteEnt.addEventListener('click', (e) => {
    e.preventDefault()

    let id = document.getElementById('id').value

    fetch(`http://localhost:8081/entrega/${id}`, {
        method: 'DELETE'
    })
    .then(resp => {
        if (!resp.ok) throw new Error(`Erro HTTP! Status: ${resp.status}`)
        return resp.text() 
    })
    .then(msg => {
        console.log('Entrega deletada com sucesso:', msg)
        resDelEnt.innerHTML = `Entrega deletada com sucesso`
    })
    .catch(err => {
        console.error('Erro ao deletar a entrega:', err)
        resDelEnt.innerHTML = `Erro ao deletar a entrega`
    })
})