import * as S from './styled'

export function Content () {
  return (
    <>
      <S.ContentInternal>
        <HeaderContent />
        <SideUm />
        <SideDois />
        <FooterContent />
      </S.ContentInternal>
      )
    </>
  )
}

function HeaderContent () {
  return (
    <>
      <S.HeaderContentInternal>
        <input placeholder='CONTRIBUTE' />
      </S.HeaderContentInternal>
    </>
  )
}

function SideUm () {
  return (
    <>
      <S.SideUmInternal>
        <textarea />
      </S.SideUmInternal>
    </>
  )
}

function SideDois () {
  return (
    <>
      <S.SideDoisInternal>
        <div />
      </S.SideDoisInternal>
    </>
  )
}

function FooterContent () {
  return (
    <>
      <S.FooterInternal>
        <p>feito com <strong>Digital</strong> por <strong>NewCapita.in</strong></p>
      </S.FooterInternal>
    </>
  )
}
