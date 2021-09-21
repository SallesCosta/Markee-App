import { ReactNode } from 'react'
import styled, { css } from 'styled-components/macro'
import { HeaderSide } from './header-Sidebar'

type Status= 'editing' | 'saving' | 'saved'

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

function Link({ children, href }: ParaLink) {
  return (
    <>
      <LinkInternal href={href}>{children}<span>x</span></LinkInternal>
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

export function Lista() {
  return (
<>
    <HeaderSide />
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

      &:hover{
      background:rgba(255, 255, 255, 0.05);
      };
`

const Wrapper = styled.div`
  margin-top: 252px;
`
