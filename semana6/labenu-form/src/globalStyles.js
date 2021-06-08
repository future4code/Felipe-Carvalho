import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle `
    * {
        font-family: sans-serif;
        font-weight: bolder;
    }

    h2 {
        color: #fc5f6a;
    }

    ol {
        color : #beddfc;
    }

    p {
        color: #beddfc;
    }

    input {
        border: 5px solid #c4ddf4;
        padding: 0.3em 3em;
    }

    select {
        padding: .6em 1.4em .5em .8em;
        border: 0.2em solid #fc5f6a;
    }
    
    button {
        background-color: #fc5f6a;
        color: white;
        padding: 5px;
        border-radius: 20%;
    }
`

export default GlobalStyle;