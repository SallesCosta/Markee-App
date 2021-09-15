import styled, { css } from 'styled-components'

export function Content () {
  return <ContentInternal>Content component</ContentInternal>
}

const ContentInternal = styled.aside`${({ theme }) => css`
background: ${theme.colors.white};
position: relative;
margin-left: 332px;
width: 100%-332px;
height: 100%;
`}`
