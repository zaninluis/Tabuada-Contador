function tabuada() {
    let numero;
    let resultado = "";

    numero = document.getElementById("numero").value
    numero = parseInt(numero);

    if ((numero < 1) || (numero > 10)) {
        resultado = "Somente números de 1 a 10!";
    }
    else {
        let cont = 1;
        resultado = "";
        while (cont < 10) {
            resultado += numero + " x  " + cont + " = " + (numero * cont) + "<br>";
            cont = cont + 1;
        }
    }
    document.getElementById("tabuada_p").innerHTML = resultado;
}

function contaLetra() {
    let letra = document.getElementById("letra").value;
    let palavra = document.getElementById("palavra").value;
    letra = letra.toUpperCase();
    palavra = palavra.toUpperCase();
    let cont = 0;
    let resultado = "";

    if (letra.length > 1) {
        resultado = "Informe apenas uma letra!"
    } else {
        if ((palavra.length > 0) && (letra.length > 0)) {
            for (i = 0; i < palavra.length; i++) {
                if (palavra.charAt(i) == letra) {
                    cont++;
                }
            }
            resultado = "A letra " + letra + " aparece " + cont + " vezes na palavra " + palavra;
        } else {
            resultado = "Não foi encontrado palavras ou letra nos campos!"
        }
    }
    document.getElementById("contaletra_p").innerHTML = resultado;
}
