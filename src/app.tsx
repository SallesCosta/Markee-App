import { useRef } from 'react'
import { Content } from './content/content'
import { Sidebar } from './sidebar/sidebar'

function App () {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <>
      <Sidebar inputRef={inputRef} />
      <Content inputRef={inputRef} />
    </>
  )
}

export { App }
