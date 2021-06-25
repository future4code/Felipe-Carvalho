import React from 'react';
import styled from 'styled-components';
/* import axios from "axios"
 */
const LiContainer = styled.li`
    color: #BCC5E6;
    list-style: none;
    padding: 4px;
` 

const ListContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40vw;
    border-bottom: 1px solid #AD8E37;
`




class List extends React.Component {

    

    render() {
        const componentesList = this.props.listNames.map((names) => {
            return (
                <ListContainer key={names.id}>
                    <LiContainer  >{names.name}</LiContainer>
                    <button onClick={() => this.props.deleteUser(names.id)}>Delete</button>
                </ListContainer>
                
            )
          })

        return (
            <div>
                <h2>Cadastro de usuários</h2>
                {componentesList}
            </div>
        )
    }
}

export default List;