// 'use strict'

// array [{objetos}]
const chats = [
    {
        nome: "Kaike Bueno",
        msg: "beijos",
        tempo: "Online",
        imagem: "kaike.jpeg",
        naoLida: "3"
    },
    {
        nome: "Bruno Paquetá",
        msg: "vou ver se tenho pedra no rim",
        tempo: "Há 15 minutos",
        imagem: "bruno.jpeg",
        naoLida: "6"
    },
    {
        nome: "Mãe",
        msg: "boa aula",
        tempo: "Há 1 minuto",
        imagem: "ale.jpg",
        naoLida: "1"
    },
    {
        nome: "Thau",
        msg: "show do veigh em carapicuíba",
        tempo: "Online",
        imagem: "thau.jpg",
        naoLida: "8"
    },
    {
        nome: "Dedeco",
        msg: "caloteira",
        tempo: "Há 1 minuto",
        imagem: "andre.jpg",
        naoLida: "10"
    },
    {
        nome: "Rafinha",
        msg: "vou te mandar um alo",
        tempo: "Online",
        imagem: "rafa.jpeg",
        naoLida: "2"
    },
    {
        nome: "Pai",
        msg: "vamo pra gaviões",
        tempo: "Online",
        imagem: "pai.png",
        naoLida: "5"
    },
    {
        nome: "Paloma",
        msg: "vou ensaiar",
        tempo: "Há 1 minuto",
        imagem: "paloma.jpg",
        naoLida: "1"
    },
    {
        nome: "FUCKING VILLA LOBOS FDS PROX",
        msg: "mostra o nico campos",
        tempo: "Online",
        imagem: "vila.jpg",
        naoLida: "10"
    },
]

// criando o html
const criarCard = (chat) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const imagem = document.createElement('img')
    imagem.src = `./img/${chat.imagem}`
    imagem.alt = chat.nome

    const infos = document.createElement('div')
    infos.classList.add('info')

    const nomeCont = document.createElement('div')
    nomeCont.classList.add('nome-container')

    const nome = document.createElement('h4')
    nome.textContent = chat.nome

    const naoLida = document.createElement('span')
    naoLida.textContent = chat.naoLida
    
    const msg = document.createElement('p')
    msg.textContent = chat.msg

    const tempo = document.createElement('div')
    tempo.classList.add('tempo')

    const time = document.createElement('p')
    time.textContent = chat.tempo

    const contato = document.createElement('div')
    contato.classList.add ('contato')

    contato.textContent = chat.ctt

    card.appendChild(imagem)
    card.appendChild(infos)
    card.appendChild(tempo)
    card.appendChild(contato)

    infos.appendChild(nomeCont)
    infos.appendChild(msg)
    nomeCont.appendChild(nome)
    nomeCont.appendChild(naoLida)

    tempo.appendChild(time)

    return card
}

const mostrarCards = (chat) => {
    const cardContainer = document.getElementById('card-container')
    const card = criarCard(chat)
    cardContainer.appendChild(card)
}

chats.forEach(mostrarCards)