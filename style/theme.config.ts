import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#ffffff',

}

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}

body {
    width: 100%;
    font-family: Roboto;
    font-weight: 400;
    font-style: normal;
}

html {
    width: 100%;
}

a {
    text-decoration: none;
}
a: visited {
    color: black;
}
a:hover {
    color: #7cda24;
}

input, textarea, button {font-family: inherit};
`