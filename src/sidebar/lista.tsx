import { ReactNode } from 'react'
import styled, { css } from 'styled-components/macro'
import { HeaderSide } from './header-Sidebar'
import * as I from 'ui/assets'

export type Status= 'editing' | 'saving' | 'saved'

type Files = {
  id: string
  name: string
  content: string
  active: boolean
  status: Status
}

type ParaLink = {
  children: ReactNode | ReactNode[],
  href: string,
}

function Link ({ children, href }: ParaLink) {
  return (
    <>
      <LinkInternal href={href}><I.File />{children}</LinkInternal>
    </>
  )
}

const data: Files[] = [
  {
    id: '1',
    name: 'README.md',
    content: '',
    active: false,
    status: 'saved',
  },

  {
    id: '2',
    name: 'CONTRIBUTING.md',
    content: '',
    active: true,
    status: 'editing',
  },

  {
    id: '3',
    name: 'LICENSE.md',
    content: '',
    active: true,
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
    active: true,
    status: 'editing',
  },

]

export function Lista () {
  return (
    <>
      <HeaderSide />
      <H2><span>Arquivos</span></H2>

      <Wrapper>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <ListaContainer>
                <Link href={item.id}>{item.name}</Link>
              </ListaContainer>
            </li>
          ))}
        </ul>
      </Wrapper>
    </>
  )
}

const LinkInternal = styled.a`${({ theme }) => css`
 color: ${theme.colors.white};
    opacity: 0.65;
    font-size: 16px;
      ${ListaContainer}:hover &{
        opacity: 1;
  }
    span {
      display: flex;
      justify-content: flex-end;
      color: red;
    }
`}`

const ListaContainer = styled.div`
    height: 37px;
    width: 268px;
    left: 32px;
    line-height: 31px;
    border-radius: 6px;
    display: flex;

      &:hover{
      background:rgba(255, 255, 255, 0.05);
      };
`

const Wrapper = styled.div`
  margin-top: 100px;
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
