import React from 'react';
import styled from 'styled-components';

const LiContainer = styled.li`
    color: #BCC5E6;
    list-style: none;
    border-bottom: 1px solid #BCC5E6;
    padding: 4px;
` 

class List extends React.Component {
    render() {
        const componentesList = this.props.listNames.map((names) => {
            return (
                <LiContainer key={names.id} >{names.name}</LiContainer>
            )
          })

        return (
            <div>
                {componentesList}
            </div>
        )
    }
}

export default List;