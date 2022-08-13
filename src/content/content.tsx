import { Files } from './../sidebar/sidebar'
import { ChangeEvent, RefObject } from 'react'
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
  file? : Files
  onUpdateFileName: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void
  onUpdateFileContent: (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export function Content ({ inputRef, file, onUpdateFileName, onUpdateFileContent }: ContentProps) {
  if (!file) {
    return null
  }
  return (
    <S.ContentInternal>
      <S.HeaderContentInternal>
        <S.Input ref={inputRef} placeholder='file name..' value={file.name} autoFocus onChange={onUpdateFileName(file.id)} />
      </S.HeaderContentInternal>
      <S.SideUmInternal>
        <WrapperSides>
          <S.Textarea
            placeholder='conta aí...'
            value={file?.content}
            onChange={onUpdateFileContent(file.id)}
          />
        </WrapperSides>
      </S.SideUmInternal>
      <S.SideDoisInternal>
        <WrapperSides>
          <OutroH1 texto='Bootcamp Brainn Co.' />
          <P dangerouslySetInnerHTML={{ __html: marked(file.content) }} />
        </WrapperSides>
      </S.SideDoisInternal>
      <S.FooterInternal>
        <S.NewCapital />
      </S.FooterInternal>
    </S.ContentInternal>
  )
}
