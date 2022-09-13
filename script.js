let btn = document.querySelector(".btn")
let Jogadores = []

btn.addEventListener("click", function() {
    let input = document.querySelector("#valor").value
    let jogador = {nome:input, vitorias: 0, derrotas: 0, empates: 0, pontos: 0 }
    Jogadores.push(jogador)
    console.log(Jogadores)
    exibeJogadores(Jogadores)
})

function exibeJogadores(jogadores) {
    elemento = ""
    for (let i = 0; i < Jogadores.length; i++) {
        elemento += "<tr>"
        elemento += "<td>"+ Jogadores[i].nome +"</td>"
        elemento += "<td>" + Jogadores[i].vitorias + "</td>"
        elemento += "<td>" + Jogadores[i].derrotas + "</td>"
        elemento += "<td>" + Jogadores[i].empates + "</td>"
        elemento += "<td>" + Jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='addVitorias("+ i +")'>add vitoria</button><button onClick='addDerrotas("+ i +")'>add derrota</button><button onClick='addEmpates("+ i +")'>add empate</button></td>"
        elemento += "</tr>"
    }
    let tabelaJogadores = document.querySelector("#tbody")
    tabelaJogadores.innerHTML = elemento
}

function calcularPontos(Jogadores) {
    let pontos = (Jogadores.vitorias * 3) + Jogadores.empates
    return pontos
}

let resultadoPontos = calcularPontos(Jogadores)

function addVitorias(i) {
    let jogador = Jogadores[i]
    jogador.vitorias++
    jogador.pontos = calcularPontos(jogador)
    exibeJogadores(Jogadores)
}
function addDerrotas(i) {
    let jogador = Jogadores[i]
    jogador.derrotas++
    exibeJogadores(Jogadores)
}
function addEmpates(i) {
    let jogador = Jogadores[i]
    jogador.empates++
    jogador.pontos = calcularPontos(jogador)
    exibeJogadores(Jogadores)
}