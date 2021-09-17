import styled, { css } from 'styled-components'

export function Content () {
  return (
    <>
      <ContentInternal>
        <HeaderContent />
        <SideUm />
        <SideDois />
        <FooterContent />
      </ContentInternal>
      )
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

const HeaderContentInternal = styled.header`${({ theme }) => css`
  background: ${theme.colors.white};
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
`}`

function SideUm () {
  return (
    <>
      <SideUmInternal>
        <textarea value='side 1' />
      </SideUmInternal>
    </>
  )
}

const SideUmInternal = styled.aside`
    top:100px;
    bottom: 42px;
    background: #f7f7;
    width: 50%;
    position: absolute;
    height: auto;
      textarea {
        max-width: 100%;
        max-height: 100%;
      }
`
function SideDois () {
  return (
    <>
      <SideDoisInternal>
        <textarea value='side 2' />
      </SideDoisInternal>
    </>
  )
}

const SideDoisInternal = styled.aside`
    top:100px;
    background: #f8f888;
    width: 50%;
    position: absolute;
    margin-left: 50%;
`

function FooterContent () {
  return (
    <>
      <FooterInternal>
        <p>feito com <strong>Digital</strong> por <strong>NewCapita.in</strong></p>
      </FooterInternal>
    </>
  )
}

const FooterInternal = styled.footer`${({ theme }) => css`
    background: ${theme.colors.primaryDark};
    position: absolute;
    width: 1588px;
    height: 42px;
    position: fixed;
    bottom: 0;
  `}`
