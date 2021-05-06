import Validacao from './Validacao/index'
import Classificacao from './Classificacao/index'

function Funcionalidade() {
    let altura = '';
    let peso = '';
    let resultado_1 = '';
    let numero_formatado = '';

    altura = document.getElementById('imc-altura').value;
    peso = document.getElementById('imc-peso').value;
    
    resultado_1 = peso / (altura * altura)

    Validacao(resultado_1)

    numero_formatado = resultado_1.toFixed(2)

    Classificacao(numero_formatado)
}

export default Funcionalidade;