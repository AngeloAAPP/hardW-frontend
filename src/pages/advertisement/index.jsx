import React from 'react'
import {Container, Content, Form, FormContent} from './styles'
import Header from '../../components/Header'
import MultipleDropzone from '../../components/MultipleDropzone'
import FormCreateAdvertisement from '../../components/forms/FormCreateAdvertisement'

const Advertisement = () => {
    return (
        <Container>
            <Header/>
            <Content>
                <MultipleDropzone/>
                <p>* Imagens não são obrigatórias, mas é uma boa idéia adicionálas, pois aumenta a chance de encontrarmos um comprador</p>
            </Content>
            <Form>
                <FormContent>
                    <FormCreateAdvertisement/>
                </FormContent>
            </Form>
        </Container>
    )
}

export default Advertisement
