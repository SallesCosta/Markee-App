import { ChangeEvent, useState, RefObject } from 'react'
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

type ContentProps = {
  inputRef: RefObject<HTMLInputElement>
}

export function Content ({ inputRef }: ContentProps) {
  return (
    <>
      <S.ContentInternal>
        <HeaderContent inputRef={inputRef} />
        <ContentText />
        <FooterContent />
      </S.ContentInternal>
      )
    </>
  )
}

function HeaderContent ({ inputRef }: ContentProps) {
  return (
    <>
      <S.HeaderContentInternal>
        <S.Input ref={inputRef} placeholder='file name..' />
      </S.HeaderContentInternal>
    </>
  )
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
        <S.NewCapital />
      </S.FooterInternal>
    </>
  )
}
