import React from 'react'
import styled from 'styled-components'
import { primaryColor } from '../constantes/colors'
import {Link} from 'react-router-dom'

const HeaderContainer = styled.div`
    height: 70px;
    display: grid;
    grid-template-columns: 100px 150px  1fr  150px 100px;
    width: 100vw;
    align-items: center;
`

const LogoContainer = styled.div`
    grid-column-start: 2;
`

const Logo = styled.h1`
    color: ${primaryColor};
`


export const Header = () =>{
    return (
        <HeaderContainer>
            <LogoContainer>
                <Link to="/"><Logo>labeddit</Logo></Link>
            </LogoContainer>
        </HeaderContainer>
    )
} 