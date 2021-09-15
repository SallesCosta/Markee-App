import styled, { css } from 'styled-components/macro'
import { ReactNode } from 'react'

type BtnProps = {
  children: ReactNode | ReactNode[]
  onClick?: any // TIPO ANY.. TYPO ANY - REVER - TIPO ANY.. TYPO ANY - REVER TIPO ANY.. TYPO ANY
}

export function BtnAdicionar ({ children, onClick }: BtnProps) {
  return <BtnAddInternal onClick={onClick}>{children}</BtnAddInternal>
}

const BtnAddInternal = styled.button`${({ theme }) => css`
  background: ${theme.colors.primary}
  position: absolute;
  width: 268px;
  height: 33.88px;
  left: 32px;
  top: 191px;
`}`
