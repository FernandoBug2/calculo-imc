function Validacao(numero_formatado) {

    if (numero_formatado === Infinity) {
        document.getElementById('resultado').innerText = 'Error, Por favor preencha todos os espaços';
    }

    else {
        document.getElementById('resultado').innerText = 'Error, Por favor preencha todos os espaços';
    }
}

export default Validacao;