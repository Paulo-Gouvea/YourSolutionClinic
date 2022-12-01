import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    :root {
        --white: #FFFFFF;

        --font-family: 'Roboto', sans-serif;
        --font-primary: #203354;
        --font-secondary: #1034A6;

        --bg-primary: #E3ECFF;
        --bg-secondary: #F8F8F8;
        --bg-button: #004ED5;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        background-color: var(--bg-secondary);
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`