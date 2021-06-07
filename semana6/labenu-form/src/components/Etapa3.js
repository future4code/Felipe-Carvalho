import React from "react";



function Etapa3() {
    return(
        <div>
            <h2>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
            <ol>
                <li>
                     <p>Por que você não terminou um curso de graduação?</p> 
                </li>
                <input type="text" />
                <li>
                    <p>Você fez algum curso complementar?</p>
                </li>
                <select>
                    <option value="">Curso técnico</option>
                    <option value="">Cursos de inglês</option>
                    <option value="">Não fiz curso complementar</option>
                </select>
            </ol>
        </div>
    )
}

export default Etapa3;
