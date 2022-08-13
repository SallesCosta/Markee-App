import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from './resource/theme'
import { App } from './app'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
html {
  font-size: 62.5%;  //essa configuração me garante que 1rem seja = a 10p x
}

body{
  font-family: 'DM Sans', sans-serif;
}

li {
  list-style-type: none;
}

textarea {
  resize: none;
}

`

function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

export { Root }
