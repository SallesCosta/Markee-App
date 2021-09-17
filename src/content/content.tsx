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
        <textarea />
      </SideUmInternal>
    </>
  )
}

const SideUmInternal = styled.aside`${({ theme }) => css`
    position: relative;
    top:100px;
    bottom: 42px;
    textarea {
      width: 50%;
      background: ${theme.colors.white};
      height: 860px;
      max-width: 100%;
      max-height: 100%;
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
      }
`}`

function SideDois () {
  return (
    <>
      <SideDoisInternal>
        <textarea />
      </SideDoisInternal>
    </>
  )
}

const SideDoisInternal = styled(SideUmInternal)`
    position: absolute;
    margin-left: 50%;
    textarea {
      width: 794px;
      height: 860px;
      max-width: 100%;
      max-height: 100%;
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }
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
