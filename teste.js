const BtnAddInternal = styled.button`${({ theme }) => css`
  align-items: center; //ok
  background: ${theme.colors.primary}; //ok
  border: 0;//ok
  border-radius: 4px;//ok
  color: ${theme.colors.lightBlack};//ok
  display: flex;
  font-size: 1.4rem;//ok
  justify-content: center;//ok
  margin-bottom: 32px;//ok
  padding: 8px 0;//ok
  transition: background 0.15s ease-in-out;
  width: 100%;//ok
  & svg {
    margin-right: 12px;
  }
  &:hover {
    background: ${theme.colors.primaryDark};
  }