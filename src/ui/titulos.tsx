import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

type Text = {
  texto: ReactNode | ReactNode[]
}

export function PAdicionar ({ texto }: Text) {
  return <PInternal>{texto}</PInternal>
}

const PInternal = styled.p`${({ theme }) => css`
  color: ${theme.colors.lightBlack};
  width: auto;
  margin: auto;
  margin-left: 28%;
  font-family: 'DM Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
`}`

export function OutroH1 ({ texto }: Text) {
  return <OutroH1Internal>{texto}</OutroH1Internal>
}

const OutroH1Internal = styled.h1`${({ theme }) => css`
  color: ${theme.colors.black};
  `}`

export const P = styled.p`${({ theme }) => css`
  color: ${theme.colors.lightBlack};
  font-family: 'DM Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`}`
