const perguntas = [
    {
      pergunta: "Quem é conhecido como 'A Rainha dos Dragões'?",
      respostas: [
        "Arya Stark",
        "Daenerys Targaryen",
        "Cersei Lannister",
      ],
      correta: 1
    },
    {
      pergunta: "Qual casa de Westeros possui um lema que diz 'O inverno está chegando'?",
      respostas: [
        "Stark",
        "Lannister",
        "Baratheon",
      ],
      correta: 0
    },
    {
      pergunta: "Qual o nome do continente principal onde a maior parte da série Game of Thrones se passa?",
      respostas: [
        "Essos",
        "Westeros",
        "Ponente",
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o autor da série de livros 'As Crônicas de Gelo e Fogo', que inspirou a série de TV Game of Thrones?",
      respostas: [
        "J.K. Rowling",
        "George R.R. Martin",
        "J.R.R. Tolkien",
      ],
      correta: 1
    },
    {
      pergunta: "Qual o nome do 'muro' que separa os Sete Reinos dos perigos do Norte?",
      respostas: [
        "Muralha de Pedra",
        "Muralha de Gelo",
        "Muralha de Ferro",
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o herdeiro legítimo do Trono de Ferro no início da série?",
      respostas: [
        "Jon Snow",
        "Robb Stark",
        "Joffrey Baratheon",
      ],
      correta: 2
    },
    {
      pergunta: "Qual o nome do lobo gigante de Jon Snow?",
      respostas: [
        "Fantasma",
        "Lobo Branco",
        "Fúria",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dessas casas é conhecida pelo lema 'O leão, a águia, o grifo e o sol'?",
      respostas: [
        "Martell",
        "Tyrell",
        "Greyjoy",
      ],
      correta: 1
    },
    {
      pergunta: "Qual personagem tem uma cicatriz facial que lhe rendeu o apelido de 'O Cão'?",
      respostas: [
        "Jaime Lannister",
        "Gregor Clegane",
        "Sandor Clegane",
      ],
      correta: 2
    },
    {
      pergunta: "Qual dessas cidades é conhecida por ser a 'capital do mundo livre'?",
      respostas: [
        "Braavos",
        "Pentos",
        "Meereen",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal =  document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //laço de repetição
  for (const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
  
    corretas.delete(item)
    if(estaCorreta) {
      alert('acertou')
        corretas.add(item)
    }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  quizItem.querySelector('dl').appendChild(dt)
  
  }
  
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  