import styled, { css } from 'styled-components'

export const ContentInternal = styled.aside`${({ theme }) => css`
background: ${theme.colors.white};
position: absolute;
margin-left: 332px;
width: 1588px;
height: 100%;
`}`

export const HeaderContentInternal = styled.header`${({ theme }) => css`
  background: ${theme.colors.white};
  position: absolute;
  width: 100%;
  height: 100px;
  input {
    background: ${theme.colors.white};
    height: 24px;
    width: 97px;
    margin-left: 60px;
    margin-top: 24px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    }
`}`

export const SideUmInternal = styled.aside`
  position: relative;
  top:100px;
  bottom: 42px;
`

export const Textarea = styled.textarea`${({ theme }) => css`
  width: 50%;
    background: ${theme.colors.white};
    height: 860px;
    max-width: 100%;
    max-height: 100%;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    color: ${theme.colors.lightBlack};
    font-family: 'DM Sans';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
`}`

export const FooterInternal = styled.footer`${({ theme }) => css`
  background: ${theme.colors.white};
  position: absolute;
  width: 1588px;
  height: 42px;
  position: fixed;
  bottom: 0;
    span {
      display: flex;
      justify-content: flex-end;
      margin-right: 20px;
      font-size: 1.1rem;
    }
`}`

export const SideDoisInternal = styled(SideUmInternal)`
  position: absolute;
  margin-left: 50%;
    div {
      width: 794px;
      height: 860px;
      max-width: 100%;
      max-height: 100%;
      border-left: 2px solid rgba(30, 41, 59, 0.12);
    }
`
