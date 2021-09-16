import styled, { css } from 'styled-components/macro'

// type Item = {
//   id: string
//   name: string
//   content: string
//   active: boolean
//   status: 'editing' | 'saving' | 'saved'
// }
//  : Item

export function Lista() {
  return (
    <ListaContainer>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <a href={item.id}>{item.name}</a><span>x</span>
          </li>
        ))}
      </ul>
      <ListaInternal />
    </ListaContainer>
  )
}

const data = [
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

const ListaInternal = styled.div`${({ theme }) => css`
position: absolute;
height: 37px;
width: 268px;
left: 32px;
border-radius: 6px;
background: rgba(255, 255, 255, 0.55);
  a{
    color: ${theme.colors.primaryDark}
    font-family: 'DM Sans';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.02em;
    text-align: left;
    margin-left: 50px;
}

  span{
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

const ListaContainer = styled.div`
margin-top: 300px;
`
