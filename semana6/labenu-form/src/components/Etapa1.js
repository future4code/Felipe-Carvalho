import React from 'react';



function Etapa1() {
    return(
        <div>
            <h2>Etapa 1 - Dados Gerais</h2>
            <ol>
                <li>
                     <p>Qual o seu nome?</p> 
                </li>
                <input type="text" />
                <li>
                    <p>Qual sua idade?</p>
                </li>
                <input type="text" />
                <li>
                    <p>Qual seu email?</p>
                </li>
                <input type="text" />
                <li>
                    <p>Qual a sua escolaridade?</p>
                </li>
                <select>
                    <option value="">Ensino Médio Incompleto</option>
                    <option value="">Ensino Médio Completo</option>
                    <option value="">Ensino Superior Incompleto</option>
                    <option value="">Ensino Superior Completo</option>
                </select>
            </ol>
        </div>
    )
}

export default Etapa1;
