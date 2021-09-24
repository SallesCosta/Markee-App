import { ChangeEvent, useState } from 'react'
import styled from 'styled-components/macro'
import { OutroH1, WrapperSides, P } from 'ui/titulos'
import * as S from './styled'
import marked from 'marked'

export function Content() {
  return (
    <>
      <S.ContentInternal>
        <HeaderContent />
        <ContentText />
        <FooterContent />
      </S.ContentInternal>
      )
    </>
  )
}

function HeaderContent() {
  return (
    <>
      <S.HeaderContentInternal>
        <input placeholder='CONTRIBUTE' />
      </S.HeaderContentInternal>
    </>
  )
}

function ContentText() {
  const [content, setContent] = useState('')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }
  return (
    <>
      <S.SideUmInternal>
        <WrapperSides>
          <S.Textarea
            placeholder='conta aí...'
            value={content}
            onChange={handleChange}
          />
        </WrapperSides>
      </S.SideUmInternal>
      <S.SideDoisInternal>
        <WrapperSides>
          <OutroH1 texto='Bootcamp Brainn Co.' />
          <P dangerouslySetInnerHTML={{ __html:  marked(content)  }} />
        </WrapperSides>
      </S.SideDoisInternal>
    </>
  )
}

function FooterContent() {
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
