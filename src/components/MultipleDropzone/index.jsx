import React, {useState, useCallback} from 'react'
import {Container} from './styles'
import {useDropzone} from 'react-dropzone'

const MultipleDropzone = ({setImages}) => {

  const [urlImages, setUrlImages] = useState([]) 

    const onDrop = useCallback(acceptedFiles => {
        try{
            const files = acceptedFiles.map(file => (
                 URL.createObjectURL(file)
            ));

            setUrlImages(files)

            setImages(acceptedFiles)
        }
        catch(err){return}
      }, [setImages])

    const {getRootProps, getInputProps} = useDropzone({onDrop, accept: 'image/*'});
    
  
    return (
      <Container id = "MultipleDropzone">
        <h1>Imagens</h1>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p className = "default">Clique aqui ou arraste e solte neste campo até 6 imagens</p>
          <p className = "mobile">Clique aqui para selecionar até 6 imagens</p>
        </div>
        <aside>
          {urlImages.length > 0 && <h4>Imagens selecionadas</h4>}
          <div className = "images">
            {urlImages.map((image, i) => <img key = {i} src = {image} alt = ""/>)}
          </div>
        </aside>
      </Container>
    )
}

export default MultipleDropzone
