let math, math2, calcul;
let pontos = 0, erros = 0

function GerarAleatorio() {
    document.getElementById("pontuacao").innerHTML = ""
    math = Math.floor(Math.random() * 10);
    math2 = Math.floor(Math.random() * 10);
    while (math == 0 || math2 == 0) {
        math = Math.floor(Math.random() * 10);
        math2 = Math.floor(Math.random() * 10);
    }
    calcul = math * math2;

    document.getElementById("Number1").innerHTML = `${math}`;
    document.getElementById("Number2").innerHTML = `${math2}`;
    document.getElementById("Resposta").value = "";
}

function VerificarResposta() {
    let resp = Number(document.getElementById("Resposta").value);
    let MandarResposta = document.getElementById("Mandar");

    if (resp === calcul) {
        MandarResposta.innerHTML = "ACERTOU";
        pontos++;
    } else {
        MandarResposta.innerHTML = `ERROU! O correto era ${calcul}`;
        erros++
    }
    GerarAleatorio()
}


let input = document.getElementById("Resposta");

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        VerificarResposta();
    }
});


function Terminar() {
    document.getElementById("Number1").innerHTML = ``;
    document.getElementById("Number2").innerHTML = ``;
    document.getElementById("Resposta").value = ``;
    document.getElementById("Mandar").innerHTML = ``;
    document.getElementById("pontuacao").innerHTML =
        `Sua pontuação foi ${pontos} e você teve ${erros} erros.`;
}
