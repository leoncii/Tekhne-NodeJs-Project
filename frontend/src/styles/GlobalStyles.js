import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    /* * {
        box-sizing:border-box;
        font-size: -apple-system;
    }

    ul, li, h1, h2, button {
        margin: 0;
        padding: 0;
    }*/
    ul{
        list-style: none;
    } 
    body {
        background: #fff;
        height: 100vh;
        margin: 0 auto;
        width: 100%;
    }
`