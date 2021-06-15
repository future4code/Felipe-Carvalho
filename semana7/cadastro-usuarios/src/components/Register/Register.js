import React from 'react';
import styled from 'styled-components';

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 35px;
    border: 1px solid black;
`

const RegisterLabel = styled.label`
    padding: 15px 0;
`

class Register extends React.Component {
    render() {
        return (
            <div>
                <RegisterContainer>
                    <RegisterLabel htmlFor="">
                        Nome: 
                        <input type="text" />
                    </RegisterLabel>
                    <RegisterLabel htmlFor="">
                        Email: 
                        <input type="text" />
                    </RegisterLabel>
                    <button>Salvar</button>
                </RegisterContainer>
            </div>
        )
    }
}

export default Register;