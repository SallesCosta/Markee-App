import { Content } from './content/content'
import { Sidebar } from './sidebar/sidebar'
import { useFiles } from './resource/hooks'
import localforage from 'localforage'
import { useEffect } from 'react'

function App () {
  const {
    files,
    AddNewFile,
    handleSelectFile,
    RemoveFile,
    inputRef,
    handleUpdateFileName,
    handleUpdateFileContent,
  } = useFiles()

  useEffect(() => {
    async function storage () {
      const value = await localforage.getItem('files')
      console.log('salvou no storage :', value)
    }
    storage()
  }, [])

  return (
    <>
      <Sidebar
        files={files}
        onAddNewFile={AddNewFile}
        onSelectFile={handleSelectFile}
        onRemoveFile={RemoveFile}
      />
      <Content
        inputRef={inputRef}
        file={files.find(file => file.active === true)}
        onUpdateFileName={handleUpdateFileName}
        onUpdateFileContent={handleUpdateFileContent}
      />
    </>
  )
}

export { App }
