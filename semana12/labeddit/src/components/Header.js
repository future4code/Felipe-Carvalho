import React from 'react'
import styled from 'styled-components'
import { primaryColor } from '../constantes/colors'
import {Link, useHistory} from 'react-router-dom'
import { useState } from 'react'
import { goToLogin } from '../routes/coordinates'
import logoreddit from '../assets/logoreddit2.png'

const HeaderContainer = styled.div`
    height: 70px;
    display: grid;
    grid-template-columns: 100px 200px  1fr  150px 100px;
    width: 100vw;
    align-items: center;
`

const LogoContainer = styled.div`
    grid-column-start: 2;
    
`

const Logo = styled.h1`
    color: ${primaryColor};
    display: inline-block;
    padding: 4px;
`

const LogContainer = styled.div`
    grid-column-start: 4;
    
`

const ButtonLog = styled.button`
    color: ${primaryColor};
    font-size: 18px;
    font-weight: bold;
`


export const Header = () =>{
    const history = useHistory()
    const token = localStorage.getItem("token")
    const [ rightButtonText, setRightButtonText ] = useState(token  ? "Logout" : "Login")

    const logout = () => {
        localStorage.removeItem("token")
    }


    const rightButoonAction = () => {
        if(token){
            logout()
            setRightButtonText("Login")
            goToLogin(history)
        }else{
            goToLogin(history)
        }
    }

    return (
        <HeaderContainer>
            <LogoContainer>
                <Link to="/">
                    <img src={logoreddit} alt="reddit" />
                    <Logo>labeddit</Logo>
                </Link>
            </LogoContainer>
            <LogContainer>
                <ButtonLog onClick={rightButoonAction}>{rightButtonText}</ButtonLog>
            </LogContainer>
        </HeaderContainer>
    )
} 