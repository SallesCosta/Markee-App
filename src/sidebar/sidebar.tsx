import styled, { css } from 'styled-components/macro'
import { BtnAdicionar } from '../ui/buttons'
import { Lista } from './lista'

export function Sidebar () {
  return (
    <SidebarInternal>
      <BtnAdicionar>+ Adicionar arquivo</BtnAdicionar>
      <Lista />
    </SidebarInternal>
  )
}

const SidebarInternal = styled.aside`${({ theme }) => css`
background: ${theme.colors.black};
min-width: 332px;
  max-width: 332px;
  height:100%;
  position: absolute;
 
`}`
