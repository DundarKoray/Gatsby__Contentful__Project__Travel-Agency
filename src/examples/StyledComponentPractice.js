import styled from 'styled-components'

const color = 'blue'

const Button = styled.button`
    /* color: red; */
    color: ${(props)=>props.color};
    background: ${color};
    /* font-size: 1rem; */
    font-size: ${props => props.big ? "3rem" : "1rem"};
    padding: 1rem;
    margin: 1rem;
`

export default Button


// use vscode-styled-components extension made by Julien Poissonnier. This exentsion makes styled components look like normal css.

// must install the package from gatsby and add into gatsby-config.js

//Examples how to use button component
//<Button big color="red">first button</Button>
//<Button color="yellow">second button</Button>