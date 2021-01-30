import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {FaUser, FaPlus} from 'react-icons/fa'

import {Dropzone} from './styles'

const DropzoneAvatar = ({setImage, fileUrl, setFileUrl}) => {
    
  const onDrop = useCallback(acceptedFiles => {
    try{
    const file = acceptedFiles[0];

    setFileUrl(URL.createObjectURL(file))
    setImage(file)
    }
    catch(err){
      console.log("erro: ", err) 
      return}
  }, [setImage, setFileUrl])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: 'image/*'})

  return (
    <Dropzone className = "dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept = 'image/*' />
      {
        isDragActive ?
          <p>Solte a imagem para enviar ...</p> :
          (
              fileUrl ? <img src = {fileUrl} alt = "Avatar" /> :
              <>
              <FaUser/>
              <FaPlus className = "plus"/>
              </>
          )
      }
    </Dropzone>
  )
}

export default DropzoneAvatar