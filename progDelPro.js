let resDelPro = document.getElementById('resDelPro')
let deletePro = document.getElementById('deletePro')

deletePro.addEventListener('click', (e) => {
    e.preventDefault()

    let id = document.getElementById('id').value

    fetch(`http://localhost:8081/produto/${id}`, {
        method: 'DELETE'
    })
    .then(resp => {
        if (!resp.ok) throw new Error(`Erro HTTP! Status: ${resp.status}`)
        return resp.text() 
    })
    .then(msg => {
        console.log('Produto deletado com sucesso:', msg)
        resDelPro.innerHTML = `Produto deletado com sucesso`
    })
    .catch(err => {
        console.error('Erro ao deletar o produto:', err)
        resDelPro.innerHTML = `Erro ao deletar o produto`
    })
})