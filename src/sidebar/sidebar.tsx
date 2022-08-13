import { BtnAdicionar } from '../ui/buttons'
import { MouseEvent } from 'react'
import { HeaderSide } from './header-Sidebar'
import * as S from './sidebar-styles'

export type Status = 'editing' | 'saving' | 'saved'

export type Files = {
  id: string
  name: string
  content: string
  active: boolean
  status: Status
}

type SidebarProps = {
  files: Files[]
  onAddNewFile: () => void
  onSelectFile: (id: string) => (e: MouseEvent) => void
  onRemoveFile: (id: string) => void
}

export function Sidebar ({ onAddNewFile, onSelectFile, onRemoveFile, files }: SidebarProps) {
  return (
    <>
      <S.SidebarInternal>
        <BtnAdicionar onClick={onAddNewFile}>+ Adicionar arquivo</BtnAdicionar>
        <HeaderSide />
        <S.H2><span>Arquivos</span></S.H2>
        <S.Wrapper>
          <S.FileList>
            {files.map(file => (
              <S.FileListItem key={(file.id)}>
                <S.FileItemLink href={`/file/${file.id}`} active={file.active} onClick={onSelectFile(file.id)}>
                  {file.name}
                </S.FileItemLink>

                {file.active && <S.StatusIconStyled status={file.status} />}

                {!file.active && (
                  <S.RemoveButton title={`Remover o arquivo ${file.name}`}>
                    <S.RemoveIcon onClick={() => onRemoveFile(file.id)} />
                  </S.RemoveButton>
                )}
              </S.FileListItem>
            ))}
          </S.FileList>
        </S.Wrapper>
      </S.SidebarInternal>
    </>
  )
}

