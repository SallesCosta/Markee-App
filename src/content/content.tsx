import styled from 'styled-components/macro'
import { OutroH1, WrapperSideDois, P } from 'ui/titulos'
import * as S from './styled'

export function Content () {
  return (
    <>
      <S.ContentInternal>
        <HeaderContent />
        <SideUm />
        <SideDois />
        <FooterContent />
      </S.ContentInternal>
      )
    </>
  )
}

function HeaderContent () {
  return (
    <>
      <S.HeaderContentInternal>
        <input placeholder='CONTRIBUTE' />
      </S.HeaderContentInternal>
    </>
  )
}

function SideUm () {
  return (
    <>
      <S.SideUmInternal>
        <textarea placeholder='conta aí...' />
      </S.SideUmInternal>
    </>
  )
}

function SideDois () {
  return (
    <>
      <S.SideDoisInternal>
        <WrapperSideDois>
          <OutroH1 texto='Bootcamp Brainn Co.' />
          <P>Loren ipsum</P>
        </WrapperSideDois>
      </S.SideDoisInternal>
    </>
  )
}

function FooterContent () {
  return (
    <>
      <S.FooterInternal>
        <NewCapital />
      </S.FooterInternal>
    </>
  )
}

function NewCapital() {
  const nc = '< NewCapital.in >'
  return (
    <>
      <span>feito com<Strong> MUUUITO ESFORÇO</Strong> por <Strong>{nc}</Strong></span>
    </>
  )
}

const Strong = styled.strong`
color: #27551c;
padding-left: 3px;
padding-right: 3px;
`
