import Funcionalidade from '../Funcionalidade'
import React from 'react';
import './style.css';

function Inputs() {
    return(
        <div id='tamanho-div'>
            <div className='div-imc'>

                <label>Altura</label>
                <input className='campo'   type='number' id='imc-altura' placeholder='Ex: 1,70' ></input>

                <label>Peso</label>
                <input className='campo'  type='number' id='imc-peso'  placeholder='Ex: 71'  ></input>
                        
                <div id='botao-calcular'>

                    <button onClick={Funcionalidade}>Calcular</button>
                    
                </div>
                        
                <textarea className='resultado' id='resultado' disabled></textarea>

            </div>
        </div>
    )
}

export default Inputs;