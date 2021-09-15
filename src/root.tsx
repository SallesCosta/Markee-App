import { ThemeProvider } from 'styled-components'
import { App } from './app'
import { theme } from './resource/theme'


function Root() {
  return (
    <ThemeProvider theme={theme}>

      <App />
    </ThemeProvider>
  )
}

export { Root }
