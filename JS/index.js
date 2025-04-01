const btn = document.querySelector('.btn')
const div = document.querySelector('.adicionar-elementos')

function mostrarInput() {
    const inputUm = document.querySelector('#objeto-nome').value
    const inputDois = document.querySelector('#objeto-qtd').value

    const item = document.createElement('div')
    item.classList.add('item')

    const qtd = document.createElement('p')
    qtd.innerHTML = `${inputDois}`
    qtd.classList.add('qtd-item')

    const nome = document.createElement('p')
    nome.innerHTML = `${inputUm}`
    nome.classList.add('nome-item')


    const btnRemove = document.createElement('a')
    btnRemove.innerHTML = 'x'
    btnRemove.classList.add('btnRemove')
    btnRemove.onclick = () => item.remove()

    const editar = document.createElement('a')
    editar.innerHTML = 'Editar'
    editar.classList.add('editar-nome')
    editar.onclick = () => {
        const pergunta = prompt('<1> Nome; <2> Quantidade')
        if (parseInt(pergunta) == 1) {
            const texto = prompt('Digite o Nome:')
            nome.innerHTML = `${texto}`
        } else if (parseInt(pergunta) == 2) {
            const texto = prompt('Digite a Quantidade:')
            qtd.innerHTML = `${texto}`
        } else {
            alert('Opção inválida!')
        }
    }

    item.appendChild(qtd)
    item.appendChild(nome)
    item.appendChild(editar)
    item.appendChild(btnRemove)

    div.appendChild(item)
}

btn.addEventListener("click", mostrarInput)