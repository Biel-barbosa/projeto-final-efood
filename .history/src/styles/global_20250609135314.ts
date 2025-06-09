import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primary: '#E66767',
    secondary: '#FFEBD9',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#4B4B4B',
    lightGray: '#F5F5F5'
  }
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`

export const colors = {
  primary: '#E66767',
  secondary: '#FFEBD9',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#4B4B4B',
  lightGray: '#F5F5F5'
} 