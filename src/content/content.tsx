import styled, { css } from 'styled-components'

export function Content() {
  return (
    <>
      <ContentInternal>
        <HeaderContent />
      </ContentInternal>)
    </>
  )
}

const ContentInternal = styled.aside`${({ theme }) => css`
background: ${theme.colors.white};
position: absolute;
margin-left: 332px;
width: 1588px;
height: 100%;
`}`

function HeaderContent () {
  return (
    <>
      <HeaderContentInternal>
        <input placeholder='CONTRIBUTE' />
      </HeaderContentInternal>
    </>
  )
}

const HeaderContentInternal = styled.header`
  position: absolute;
  width: 100%;
  height: 100px;
    input {
      height: 24px;
      width: 97px;
      margin-left: 60px;
      margin-top: 24px;
      border-radius: 0px;
}
`
