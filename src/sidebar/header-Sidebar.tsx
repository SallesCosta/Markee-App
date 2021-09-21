import styled, {css} from 'styled-components'
import markeeLogo from './markee-logo.png'

export function HeaderSide () {
  return (
    <Ajuste>
      <LogoHeaderSide src={markeeLogo} />
      <H1>Markee<span>.</span></H1>
    </Ajuste>
  )
}

const LogoHeaderSide = styled.img`
  display: block;
  align-items: center;
`

const H1 = styled.h1`${({ theme }) => css`
color: ${theme.colors.white};
  margin: 0;
  text-align: center;
  margin-top: 20px;
  span {
    color: ${theme.colors.primary}
  }
`}`

const Ajuste = styled.div`
  display: flex;
  margin-left: 84px;
  margin-top: 48px;
`
