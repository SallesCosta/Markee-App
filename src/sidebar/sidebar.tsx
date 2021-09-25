import styled, { css } from 'styled-components/macro'
import { BtnAdicionar } from '../ui/buttons'
import { v4 as uuidv4 } from 'uuid'
import { useState, RefObject } from 'react'
import * as S from './sidebar-styles'
import { HeaderSide } from './header-Sidebar'

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

  return (
    <SidebarInternal>
      <BtnAdicionar onClick={AddNewFile}>+ Adicionar arquivo</BtnAdicionar>
      <HeaderSide />
      <H2><span>Arquivos</span></H2>
      <Wrapper>
        <S.FileList>
          {files.map(file => (
            <S.FileListItem key={(file.id)}>
              <S.FileItemLink href={`${file.id}`} active={file.active}>
                {file.name}
              </S.FileItemLink>

              {file.active && <S.StatusIconStyled status={file.status} />}

              {!file.active && (
                <S.RemoveButton title={`Remover o arquivo ${file.name}`}>
                  <S.RemoveIcon />
                </S.RemoveButton>
              )}
            </S.FileListItem>
          ))}
        </S.FileList>
      </Wrapper>
    </SidebarInternal>
  )
}

const SidebarInternal = styled.aside`${({ theme }) => css`
background: ${theme.colors.black};
min-width: 332px;
  max-width: 332px;
  height:100%;
  position: absolute;

`}`

const Wrapper = styled.div`
      margin-top: 100px;
      padding: 32px;
      `

const H2 = styled.h2`${({ theme }) => css`
  color: ${theme.colors.white};
  font-size: 1.6rem;
  position: relative;
  padding-left: 20px;
  margin: 40px 0 32px;
  span {
    background-color: ${theme.colors.black};
    display: inline-block;
    position: relative;
    padding: 0 10px;
    z-index: 1;
  }
  &::before {
    background: ${theme.colors.primary};
    border-radius: 2px;
    content: '';
    display: block;
    height: 2px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    z-index: 0;
  }
`}`
