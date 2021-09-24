import { ChangeEvent, useState } from 'react'
import styled from 'styled-components/macro'
import { OutroH1, WrapperSides, P } from 'ui/titulos'
import * as S from './styled'
import marked from 'marked'
import 'highlight.js/styles/github.css'

import('highlight.js').then(hljs => {
  const h = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }
      return h.highlightAuto(code).value
    },
  })
})
export function Content () {
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

function HeaderContent () {
  return (
    <>
      <S.HeaderContentInternal>
        <Input type='text' name='name' placeholder='file name..'/>
      </S.HeaderContentInternal>
    </>
  )
}

type InputProps = {
  type: string;
  name: string;
  placeholder?: string;
}

function Input ({ type, name, placeholder }: InputProps) {
  return <input type={type} name={name} placeholder={placeholder} />
}

function ContentText () {
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
          <P dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </WrapperSides>
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

function NewCapital () {
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
