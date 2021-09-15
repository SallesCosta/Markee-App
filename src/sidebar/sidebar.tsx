import styled, { css } from 'styled-components'

export function Sidebar () {
  return <SidebarInternal>sidebar component</SidebarInternal>
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
