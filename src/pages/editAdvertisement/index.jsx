import React, { useState } from 'react'
import { Container, Content, Form, FormContent, PersonalizedBackgroundColor } from './styles'
import Header from '../../components/Header'
import FormEditAdvertisement from '../../components/forms/FormEditAdvertisement'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/Auth'
import { MdClear } from 'react-icons/md'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Confirm } from 'react-st-modal'
import api from '../../services/api'
import { css } from '@emotion/core'
import LoadingAnimation from 'react-spinners/SyncLoader'
import Dropzone from '../../components/DropzoneAddImage'

const Advertisement = ({ match }) => {

    const history = useHistory()
    const { authenticated, loading: loadingApplication } = useAuth()
    const { data, updateUserData } = useAuth()
    const [loadingDropImage, setLoadingDropImage] = useState(false)
    const [idImgLoading, setIdImgLoading] = useState("")
    const [loadingAddImage, setLoadingAddImage] = useState(false)

    const [fileurl, setFileurl] = useState("")
    const [image, setImage] = useState("")

    if (!authenticated && !loadingApplication) {
        history.push('/')
        return null
    }

    let announcement = data.adverts.filter(announcement => announcement.id === match.params.id)

    if (announcement.length === 0) {
        history.push('/')
        return null
    }

    async function dropImage(imageID) {
        const confirm = await Confirm("Esta ação é irreversível e a imagem não poderá ser recuperada posteriormente.",
            "Tem certeza que deseja excluir esta imagem?", "Excluir", "Cancelar"
        )

        if (confirm) {
            setIdImgLoading(imageID)
            setLoadingDropImage(true)
            try {
                await api.delete(`/announcements/${match.params.id}/image`, {
                    data: {
                        imageID
                    }
                })

                let newData = {}
                newData.images = [
                    ...announcement[0].images.filter(image => image.id !== imageID)
                ]

                updateUserData({
                    adverts: [
                        { ...announcement[0], ...newData },
                        ...data.adverts.filter(advertisement => advertisement.id !== match.params.id)
                    ]
                })
                toast.success("Imagem excluída com sucesso")
            } catch (err) {
                toast.error(err.response.data.message)
            }
            setLoadingDropImage(false)
        }
    }

    async function addImage() {

        const formData = new FormData()

        formData.append('image', image)

        setLoadingAddImage(true)
        try {
            const res = await api.post(`/announcements/${match.params.id}/image`, formData)
            let newData = {}
                newData.images = [
                    ...announcement[0].images,
                    {
                        id: res.data.images[0].id,
                        url: res.data.images[0].url
                    }
                ]
            updateUserData({
                adverts: [
                    { ...announcement[0], ...newData },
                    ...data.adverts.filter(advertisement => advertisement.id !== match.params.id)
                ]
            })
            toast.success("Imagem adicionada com sucesso")

            setFileurl("")
            setImage("")
        } catch (err) {
            toast.error(err.response.data.message)
        }
        setLoadingAddImage(false)
    }


    return (
        <>
            <Header />
            <Container>
                <Content>
                    <div className="images">
                        {/* Exibe as imagens do anúncio com opção de excluir */}
                        {announcement[0].images.map(image =>
                            <div className="image" key={image.id}>
                                <img className={loadingDropImage && idImgLoading === image.id ? "opacity" : ""} src={image.url} alt="imagem do anúncio" />

                                {/* Exibe o botão de excluir */}
                                {(!loadingDropImage || idImgLoading !== image.id) && <MdClear className="close" onClick={() => dropImage(image.id)} />}

                                {/* Exibe o loading para a imagem que está sendo excluída após o usuário clicar em excluir */}
                                {loadingDropImage && idImgLoading === image.id &&
                                    <div className="sweet-loading loading">
                                        <LoadingAnimation
                                            css={css`
                                                    width: 100%;
                                                    margin: 0 auto;
                                                `}
                                            color={"black"}
                                            loading={loadingDropImage}
                                        />
                                    </div>
                                }
                            </div>
                        )}
                        {/* Exibe o campo para adicionar uma nova imagem */}
                        {
                            announcement[0].images.length < 6 &&
                                <div className="image">
                                    <Dropzone
                                        fileUrl={fileurl}
                                        setFileUrl={setFileurl}
                                        setImage={setImage}
                                    />
                                    {fileurl && <button onClick={() => addImage()} disabled={loadingAddImage}> {loadingAddImage ? 
                                    <div className="sweet-loading">
                                        <LoadingAnimation
                                            css={css`
                                                width: 100%;
                                            `}
                                            color="#F99615"
                                            loading={loadingAddImage}

                                        />
                                    </div> : <div>Confirmar</div>}</button>}
                                </div>                     
                        }
                    </div>
                </Content>
                
                <Form>
                    <FormContent>
                        <p>As alterações nas imagens são salvas, mesmo que não clique em "salvar" ao final da página</p>
                        <FormEditAdvertisement data={announcement[0]} />
                    </FormContent>
                </Form>
                <ToastContainer />
            </Container>
            <PersonalizedBackgroundColor />
        </>
    )
}

export default Advertisement
