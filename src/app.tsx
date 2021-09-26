import { Content } from './content/content'
import { Sidebar } from './sidebar/sidebar'
import { useFiles } from './resource/hooks'

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
