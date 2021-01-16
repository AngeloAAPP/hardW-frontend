import React, {useState} from 'react'
import {Container, Content, Form, FormContent, PersonalizedBackgroundColor} from './styles'
import Header from '../../components/Header'
import MultipleDropzone from '../../components/MultipleDropzone'
import FormCreateAdvertisement from '../../components/forms/FormCreateAdvertisement'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../../contexts/Auth'

const Advertisement = () => {

    const history = useHistory()
    const {authenticated, loading} = useAuth()

    const [images, setImages] = useState([])

    if(!authenticated && !loading)
        history.push('/login?redirect=newAdvertisement')

    return (
        <>
        <Header/>
            <Container>
                <Content>
                    <MultipleDropzone setImages = {setImages}/>
                    <p>* Imagens não são obrigatórias, mas é uma boa idéia adicionálas, pois aumenta a chance de encontrarmos um comprador</p>
                </Content>
                <Form>
                    <FormContent>
                        <FormCreateAdvertisement images = {images}/>
                    </FormContent>
                </Form>
            </Container>
            <PersonalizedBackgroundColor/>
        </>
    )
}

export default Advertisement
