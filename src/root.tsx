import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { App } from './app'
import { theme } from './resource/theme'
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
