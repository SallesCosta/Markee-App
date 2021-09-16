import { ReactNode } from 'react'
import styled, { css } from 'styled-components/macro'

type Files = {
  id: string
  name: string
  content: string
  active: boolean
  status: 'editing' | 'saving' | 'saved'
}

type ParaLink = {
  children: ReactNode | ReactNode[],
  href: string,
}

function Link ({ children, href }: ParaLink) {
  return (
    <>
      <LinkInternal href={href}>{children}</LinkInternal>
      <span>x</span>
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
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <ListaContainer>
            <Link href={item.id}>{item.name}</Link>
          </ListaContainer>
        </li>
      ))}
    </ul>
  )
}

const LinkInternal = styled.a`${({ theme }) => css`
 color: ${theme.colors.white};
    opacity: 0.65;
    font-size: 16px;
      ${ListaContainer}:hover &{
        opacity: 1;
  }
  `}`

const ListaContainer = styled.div`${({ theme }) => css`
    height: 37px;
    width: 268px;
    left: 32px;
    top: 336.880615234375px;
    border-radius: 6px;
      &:hover{
      background:rgba(255, 255, 255, 0.05);
      }
  }

  span {
    color: ${theme.colors.white}
    font-family: 'DM Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.02em;
    text-align: left;
    margin-right: 0;
  }
`}`
