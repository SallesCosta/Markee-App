import { useRef, useState, useEffect, ChangeEvent, MouseEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Files } from '../sidebar/sidebar'
import localforage from 'localforage'

export function useFiles () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<Files[]>([])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function updateStatus () {
      const file = files.find(file => file.active === true)

      if (!file || file.status !== 'editing') {
        return
      }

      timer = setTimeout(() => {
        setFiles(files => files.map(file => {
          if (file.active) {
            return {
              ...file,
              status: 'saving',
            }
          }

          return file
        }))

        setTimeout(() => {
          setFiles(files => files.map(file => {
            if (file.active) {
              return {
                ...file,
                status: 'saved',
              }
            }

            return file
          }))
        }, 300)
      }, 300)
    }

    updateStatus()

    return () => clearTimeout(timer)
  }, [files])

  useEffect(() => {
    localforage.setItem('Markee App', files)
  }, [files])

  useEffect(() => {
    async function getFromStorage () {
      const files = await localforage.getItem<Files[]>('Markee App')

      if (files) {
        setFiles(files)
        return
      }

      AddNewFile()
    }

    getFromStorage()
  }, [])

  const AddNewFile = () => {
    inputRef.current?.focus()

    setFiles(files => files
      .map(file => ({
        ...file,
        active: false,
      }))
      .concat({
        id: uuidv4(),
        name: 'Sem título',
        content: '',
        active: true,
        status: 'saved',
      }))
  }

  const RemoveFile = (id: string) => {
    setFiles(prevState => prevState.filter(file => file.id !== id))
    console.log('excluiu arquivo: ', id)
  }

  const handleUpdateFileName = (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          name: e.target.value,
          status: 'editing',
        }
      }

      return file
    }))
  }

  const handleUpdateFileContent = (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFiles(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          content: e.target.value,
          status: 'editing',
        }
      }

      return file
    }))
  }

  const handleSelectFile = (id: string) => (e: MouseEvent) => {
    e.preventDefault()

    inputRef.current?.focus()

    setFiles(files => files.map(file => ({
      ...file,
      active: file.id === id,
    })))
  }
  return {
    inputRef,
    files,
    AddNewFile,
    handleSelectFile,
    RemoveFile,
    handleUpdateFileName,
    handleUpdateFileContent,
  }
}
