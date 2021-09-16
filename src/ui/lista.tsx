import styled, { css } from 'styled-components/macro'

export function Lista () {
  return (
    <ListaContainer>
      <ul>
        <ListaInternal>
          <li>
            <a href='/'>README.md</a>
            <span>x</span>
          </li>
        </ListaInternal>
      </ul>
    </ListaContainer>
  )
}

const ListaInternal = styled.li`${({ theme }) => css`
position: absolute;
height: 37px;
width: 268px;
left: 32px;
border-radius: 6px;
background: rgba(255, 255, 255, 0.05);
a, span{
  color: ${theme.colors.white}
}
`}`

const ListaContainer = styled.div`
margin-top: 300px;
`
