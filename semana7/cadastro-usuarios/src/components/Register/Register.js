import React from 'react';
import styled from 'styled-components';

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 35px;
    border: 1px solid #AD8E37;
    background: #4F5361;
`

const RegisterLabel = styled.label`
    padding: 15px 0;
    color: #BCC5E6;
`

const InputStyle = styled.input`
    color: #4F5361;
    background-color: #BCC5E6;
`

const ButtonStyle = styled.button`
    color: #323C61;
    background-color: #BCC5E6;
    border: none;
    width: 4rem;
    height: 2rem;
`


class Register extends React.Component {

    

    render() {
        return (
            <div>
                <RegisterContainer>
                    <h2>Cadastro de usuários</h2>
                    <RegisterLabel htmlFor="">
                        Nome: 
                        <InputStyle 
                            type="text" 
                            value={this.props.inputName}
                            onChange={this.props.onChangeInputName}
                        />
                    </RegisterLabel>
                    <RegisterLabel htmlFor="">
                        Email: 
                        <InputStyle 
                            type="text"
                            value= {this.props.inputEmail}
                            onChange= {this.props.onChangeInputEmail}
                        />
                    </RegisterLabel>
                    <ButtonStyle onClick={this.props.createUser}>Salvar</ButtonStyle>
                </RegisterContainer>
            </div>
        )
    }
}

export default Register;