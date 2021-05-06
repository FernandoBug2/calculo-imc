function Classificacao(numero_formatado) {
    let classificacao = '';

    if (numero_formatado < 17 && numero_formatado > 0.01) {
        classificacao = 'IMC: ' + numero_formatado + ', Muito Abaixo do Peso'
        document.getElementById('resultado').innerText = classificacao;
    }
    else if (numero_formatado > 17 && numero_formatado < 18.49) {
        classificacao = 'IMC: ' + numero_formatado + ', Abaixo do Peso'
        document.getElementById('resultado').innerText = classificacao;    
    }
    else if (numero_formatado > 18.5 && numero_formatado < 24.99) {
        classificacao = 'IMC: ' + numero_formatado + ', Peso Normal'
        document.getElementById('resultado').innerText = classificacao;     
    }
    else if (numero_formatado > 25 && numero_formatado < 29.99) {
        classificacao = 'IMC: ' + numero_formatado + ', Acima do Peso'
        document.getElementById('resultado').innerText = classificacao;   
    }
    else if (numero_formatado > 30 && numero_formatado < 34.99) {
        classificacao = 'IMC: ' + numero_formatado + ', Obesidade I'
        document.getElementById('resultado').innerText = classificacao;   
    }
    else if (numero_formatado > 35 && numero_formatado < 39.99) {
        classificacao = 'IMC: ' + numero_formatado + ', Obesidade II'
        document.getElementById('resultado').innerText = classificacao;
    }
    else if ( numero_formatado > 40 && numero_formatado < Infinity ) {
        classificacao = 'IMC: ' + numero_formatado + ', Obesidade III'
        document.getElementById('resultado').innerText = classificacao;
    }

    
    console.log(numero_formatado)
}

export default Classificacao;