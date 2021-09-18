import styled, { css } from 'styled-components/macro'
import { ReactNode } from 'react'
import { PAdicionar } from './titulos'

type BtnProps = {
  children: ReactNode | ReactNode[] | string
  onClick?: () => void | null
}

export function BtnAdicionar ({ children, onClick }: BtnProps) {
  return <BtnAddInternal onClick={onClick}><PAdicionar texto={children} /></BtnAddInternal>
}

const BtnAddInternal = styled.button`${({ theme }) => css`

  background: ${theme.colors.primary};
  color: ${theme.colors.lightBlack};
  cursor: pointer;
  position: absolute;
  width: 268px;
  height: 33.88px;
  left: 32px;
  top: 191px;
  border-radius: 4px;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  font-size: 1.4rem;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 32px;
  padding: 8px 0;
  transition: background 0.15s ease-in-out;

   & :hover{
      background: ${theme.colors.primaryDark};
      }
`}`
