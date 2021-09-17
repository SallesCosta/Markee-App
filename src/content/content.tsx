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
        <NewCapital />
      </S.FooterInternal>
    </>
  )
}

function NewCapital() {
  const por = '< NewCapital.in >'

  return (
    <>
      <span>feito com MUUUITO ESFORÇO por {por}</span>
    </>
  )
}
