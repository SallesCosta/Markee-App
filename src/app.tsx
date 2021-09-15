//import { ReactNode } from 'react'
import styled, { css } from 'styled-components/macro'

function App () {
  return <Title>App</Title>
}

const Title = styled.h1`${({ theme }) => css`
  background: ${theme.colors.black};
  color: ${theme.colors.primary}
`}`

// type TitleProps = {
//   children: ReactNode | ReactNode[]
// }

// function Title ({ children }: TitleProps) {
//   return <h1>{children}</h1>
// }

export { App }
