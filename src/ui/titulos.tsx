import { ReactNode } from 'react'

type Text = {
  texto: ReactNode | ReactNode[]
}

export function P ({ texto }: Text) {
  return <p>{texto}</p>
}
