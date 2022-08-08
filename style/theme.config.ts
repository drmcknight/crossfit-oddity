import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#ffffff',

}

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    background: ${({theme}) => theme.body };
    color: ${({theme}) => theme.text };
    font-family: san-serif;
    font-weight: 400;
    font-style: normal;
}

input, textarea, button {font-family: inherit};
`