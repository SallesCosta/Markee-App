// import styled, { css } from 'styled-components/macro'
import { Content } from './content/content'
import { Sidebar } from './sidebar/sidebar'

function App () {
  // return <Title arroz='a'>App</Title>
  return (
    <>
      <Sidebar />
      <Content />
    </>
  )
}

// type TitleProps = {
//   arroz: string;
// }

// const Title = styled.h1<TitleProps>`${({ theme }) => css`
//   background: ${theme.colors.black};
//   color: ${theme.colors.primary};
// `}`

export { App }
