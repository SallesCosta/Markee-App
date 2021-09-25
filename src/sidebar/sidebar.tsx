import { BtnAdicionar } from '../ui/buttons'
import { v4 as uuidv4 } from 'uuid'
import { useState, RefObject } from 'react'
import { HeaderSide } from './header-Sidebar'
import * as S from './sidebar-styles'

type SidebarProps = {
  inputRef: RefObject<HTMLInputElement>
}

export type Status = 'editing' | 'saving' | 'saved'

type Files = {
  id: string
  name: string
  content: string
  active: boolean
  status: Status
}

// function MajIcon ({inputRef}) {
//   const [status, setStatus] = useState('')
//   (inputRef.focus)
// }

export function Sidebar ({ inputRef }: SidebarProps) {
  const [files, setFiles] = useState<Files[]>([])

  const AddNewFile = () => {
    inputRef.current?.focus()

    setFiles(files => files
      .map(file => ({
        ...file,
        active: false,
      }))
      .concat({
        id: uuidv4(),
        name: 'Sem título',
        content: '',
        active: true,
        status: 'saved',
      }))
  }

  const RemoveFile = (id: string) => {
    setFiles(prevState => prevState.filter(file => file.id !== id))
    console.log('excluiu arquivo: ', id)
  }

  return (
    <S.SidebarInternal>
      <BtnAdicionar onClick={AddNewFile}>+ Adicionar arquivo</BtnAdicionar>
      <HeaderSide />
      <S.H2><span>Arquivos</span></S.H2>
      <S.Wrapper>
        <S.FileList>
          {files.map(file => (
            <S.FileListItem key={(file.id)}>
              <S.FileItemLink href={`${file.id}`} active={file.active}>
                {file.name}
              </S.FileItemLink>

              {file.active && <S.StatusIconStyled status={file.status} />}

              {!file.active && (
                <S.RemoveButton title={`Remover o arquivo ${file.name}`}>
                  <S.RemoveIcon onClick={() => RemoveFile(file.id)} />
                </S.RemoveButton>
              )}
            </S.FileListItem>
          ))}
        </S.FileList>
      </S.Wrapper>
    </S.SidebarInternal>
  )
}
