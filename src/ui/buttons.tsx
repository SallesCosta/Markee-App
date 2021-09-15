import styled, { css } from 'styled-components/macro'
import { ReactNode } from 'react'
import { PAdicionar } from './titulos'

type BtnProps = {
  children: ReactNode | ReactNode[] | string
  onClick?: ()=> void | null
  // onClick?: React.MouseEvent<HTMLButtonElement> | undefined
}

export function BtnAdicionar ({ children, onClick }: BtnProps) {
  return <BtnAddInternal onClick={onClick}><PAdicionar texto={children} /></BtnAddInternal>
}

const BtnAddInternal = styled.button`${({ theme }) => css`
  background: ${theme.colors.primary};
  color: ${theme.colors.lightBlack};
  position: absolute;
  width: 268px;
  height: 33.88px;
  left: 32px;
  top: 191px;
  border-radius: 3.38806px;
`}`
