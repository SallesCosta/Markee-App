import styled, { css } from 'styled-components'

export function BtnAdicionar () {
  return <BtnAddInternal />
}

const BtnAddInternal = styled.button`${({ theme }) => css`
  background: ${theme.colors.black}
  position: absolute;
  width: 268px;
  height: 33.88px;
  left: 32px;
  top: 191px;
`}`
