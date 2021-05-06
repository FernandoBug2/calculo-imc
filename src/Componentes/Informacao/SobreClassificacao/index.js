import React from 'react';
import './style.css'

function SobreClassificacao() {
    return (
        <div id='div-classes'>
            <h2>Classificações</h2>

            <div id='classes'>

                <div>
                    <h3>Muito abaixo do peso</h3>
                    <p>IMC Abaixo de 17</p>
                </div>

                <div>
                    <h3>Abaixo do peso</h3>
                    <p>IMC Entre 17 e 18,49</p>
                </div>

                <div>
                    <h3>Peso normal</h3>
                    <p>IMC Entre 18,5 e 24,99</p>
                </div>

                <div>
                    <h3>Acima do peso</h3>
                    <p>IMC Entre 25 e 29,99</p>
                </div>

                <div>
                    <h3>Obesidade I</h3>
                    <p>IMC Entre 30 e 34,99</p>
                </div>

                <div>   
                    <h3>Obesidade II</h3>
                    <p>IMC Entre 35 e 39,99</p>
                </div>

                <div>
                    <h3>Obesidade III</h3>
                    <p>IMC Acima de 40</p>
                </div>

            </div>
        </div>
    )
}

export default SobreClassificacao;