import styled, { css } from 'styled-components/macro'
import { HeaderSide } from './header-Sidebar'
import * as S from './sidebar-styles'

export type Status = 'editing' | 'saving' | 'saved'

type Files = {
  id: string
  name: string
  content: string
  active: boolean
  status: Status
}

const data: Files[] = [
  {
    id: '1',
    name: 'README.md',
    content: '',
    active: true,
    status: 'saved',
  },

  {
    id: '2',
    name: 'CONTRIBUTING.md',
    content: '',
    active: false,
    status: 'editing',
  },

  {
    id: '3',
    name: 'LICENSE.md',
    content: '',
    active: false,
    status: 'saving',
  },

  {
    id: '4',
    name: 'Links.md',
    content: '',
    active: true,
    status: 'saved',
  },

  {
    id: '5',
    name: 'roadmap.md',
    content: '',
    active: false,
    status: 'saved',
  },

]

export function Lista() {
  return (
    <>
      <HeaderSide />
      <H2><span>Arquivos</span></H2>
      <Wrapper>
        <S.FileList>
          {data.map(data => (
            <S.FileListItem key={data.id}>
              <S.FileItemLink href={`${data.id}`} active={data.active}>
                {data.name}
              </S.FileItemLink>

              {data.active && <S.StatusIconStyled status={data.status} />}

              {!data.active && (
                <S.RemoveButton title={`Remover o arquivo ${data.name}`}>
                  <S.RemoveIcon />
                </S.RemoveButton>
              )}
            </S.FileListItem>
          ))}
        </S.FileList>
      </Wrapper>
    </>
  )
}

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
