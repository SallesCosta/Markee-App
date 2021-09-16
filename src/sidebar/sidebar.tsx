import styled, { css } from 'styled-components/macro'
import { BtnAdicionar } from '../ui/buttons'
import { Lista } from 'ui/lista'

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
  width:332px;
  height:100%;
  /* height:1024px; */
  position: absolute;
  left: 0;
  top: 0;
`}`
