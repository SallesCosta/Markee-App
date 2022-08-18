import { RefObject } from 'react'
import styled, { css } from 'styled-components'

export const ContentInternal = styled.aside`
  ${({ theme }) => css`
    background: tomato;
    background: ${theme.colors.white};
    height: 100%;
    margin-left: ${theme.dim.sidebarW};
    max-width: calc(100vw - ${theme.dim.sidebarW});
    position: absolute;
    width: calc(100vw - ${theme.dim.sidebarW});
  `}
`

export const HeaderContentInternal = styled.header`
  ${({ theme }) => css`
    align-items: flex-start;
    background: ${theme.colors.white};
    height: ${theme.dim.headerH};
    position: absolute;
    width: calc(100vw - ${theme.dim.sidebarW});
  `}
`

type InputProps = {
  placeholder?: string
  ref: RefObject<HTMLInputElement>
}

export const Input = styled.input<InputProps>`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    height: 24px;
    width: 97px;
    margin-left: 60px;
    margin-top: 24px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    padding: 5px;
    flex-grow: 1;
    font-size: 1.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    height: calc(100vh - ${theme.dim.footerH} - ${theme.dim.headerH});
    margin-top: 100px;
    padding-left: 32px;
  `}
`
export const SideUmInternal = styled.aside`
  ${({ theme }) => css`
    bottom: ${theme.dim.footerH};
    width: 50%;
  `}
`

export const SideDoisInternal = styled(SideUmInternal)`
  overflow: scroll;
  max-width: 50%;
  border-left: 2px solid rgba(30, 41, 59, 0.12);
`

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.lightBlack};
    height: 860px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    letter-spacing: 0em;
    line-height: 23px;
    font-family: 'DM Sans';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    max-height: 100%;
    text-align: left;
    width: 100%;
  `}
`

export const FooterInternal = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    width: calc(100vw - ${theme.dim.sidebarW});
    height: ${theme.dim.footerH};
    bottom: 0;
    span {
      display: flex;
      justify-content: flex-end;
      margin-right: 20px;
      font-size: 1.1rem;
    }
  `}
`

export function NewCapital () {
  const nc = '< NewCapital.in >'
  return (
    <>
      <span>
        feito com<Strong> MUUUITO ESFORÇO</Strong> por <Strong>{nc}</Strong>
      </span>
    </>
  )
}

export const Strong = styled.strong`
  color: #27551c;
  padding-left: 3px;
  padding-right: 3px;
`
