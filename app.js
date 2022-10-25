function Chutar() {
    let numeroSecreto =  Math.floor (10*Math.random())
    console.log(numeroSecreto)
    let chute = document.getElementById("valor").value
    let certo = '<img src="imagens/feliz.jpg"> <height = "8" widht "8">'
    let erro  = '<img src="imagens/triste.jpg"> <height = "8" widht "8">'

    if (chute == numeroSecreto) {
        //verdadeiro
        document.getElementById("resultado").innerHTML = '<img src="imagens/feliz.jpg"> <height = "8" widht "8">'
    }
    else {
        //falso
        document.getElementById("resultado").innerHTML = '<img src="imagens/triste.jpg"> <height = "8" widht "8">'
    }
}