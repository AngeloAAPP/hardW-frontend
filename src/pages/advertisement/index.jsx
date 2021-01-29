import React, { useState, useEffect} from 'react'
import { Container, Content, Grid } from './styles'
import Header from '../../components/Header'
import AdvertiserCard from '../../components/AdvertiserCard'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { MdSend, MdMessage, MdComment, MdNavigateNext, MdNavigateBefore } from 'react-icons/md'
import api from '../../services/api'
import { useAuth } from '../../contexts/Auth'
import { css } from '@emotion/core'
import LoadingAnimation from 'react-spinners/SyncLoader'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import NotFound from '../../pages/notFound'

const Advertisement = ({ match }) => {

    const [announcementData, setAnnouncementData] = useState({})
    const { authenticated, id } = useAuth()
    const [loading, setLoading] = useState(false)
    const [loadingAnnouncement, setLoadingAnnouncement] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [buttonAnimation, setButtonAnimation] = useState("")
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {

        async function getData() {
            try {
                setLoadingAnnouncement(true)
                const res = await api.get(`/announcements/${match.params.id}`)
                setLoadingAnnouncement(false)
                setAnnouncementData(res.data)
            } catch (err) {
                setAnnouncementData(null)
            }
        }

        getData()
    }, [refresh])

    //Efetua uma pergunta ao anunciante
    async function createQuestion() {

        const question = document.getElementById('input-question')

        setLoading(true)

        try {
            await api.post(`/announcements/${match.params.id}/question`, {
                question: question.value
            })
            toast.success("Pergunta enviada com sucesso")
            question.value = ""
            setRefresh(!refresh)
        } catch (err) {
            toast.error("Falha ao enviar pergunta: " + err.response.data.message)
        }

        setLoading(false)
    }

    //Anunciante responde uma pergunta
    async function replyQuestion(id) {
        const answer = document.getElementById(`input-reply-${id}`).value

        setButtonAnimation(id)
        setLoading(true)

        try {
            await api.put(`/announcements/${match.params.id}/answer`, {
                questionID: id,
                answer
            })
            toast.success("Pergunta respondida com sucesso")
            setRefresh(!refresh)
        } catch (err) {
            toast.error("Falha ao responder pergunta: " + err.response.data.message)
        }

        setLoading(false)
    }

    function nextImage() {
        if (currentImage === announcementData.images.length - 1)
            setCurrentImage(0)
        else
            setCurrentImage(currentImage + 1)
    }

    function beforeImage() {
        if (currentImage === 0)
            setCurrentImage(announcementData.images.length - 1)
        else
            setCurrentImage(currentImage - 1)
    }

    return (
        announcementData === null ? <NotFound announcement={true} /> :
            <Container>
                <Header />

                {/* Exibe um loading enquanto os dados do anúncio são carregados */}
                {loadingAnnouncement &&
                    <div className="loading">
                        <p>Carregando dados do anúncio</p>
                        <div className="sweet-loading">
                            <LoadingAnimation
                                css={css`
                                width: 100%;
                            `}
                                color={"#C87F20"}
                                loading={loadingAnnouncement}

                            />
                        </div>
                    </div>
                }
                {Object.values(announcementData).length > 0 && <Content>
                    <div className="title">
                        <h1>{announcementData.name}</h1>
                        <h2>Publicado em: {new Date(announcementData.createdAt).toLocaleString("pt-br")}</h2>
                    </div>
                    <Grid>
                        {/* Imagens do anúncio */}
                        <div className="left-content">{announcementData.images.length > 0 ? <>
                            <div className="main-image">
                                <img src={announcementData.images[currentImage].url} alt="imagem do anúncio" />

                                {announcementData.images.length > 1 &&
                                    <>
                                        <MdNavigateBefore className="before" onClick={beforeImage} />
                                        <MdNavigateNext className="next" onClick={nextImage} />
                                    </>
                                }

                            </div>
                            <div className="all-images">
                                {announcementData.images.map((image, i) => <img className={currentImage === i ? "selected" : ""} key={i} src={image.url} onClick={() => setCurrentImage(i)} alt="imagem do anúncio" />)}
                            </div>
                        </> : <div className="no-image"><p>O anunciante não adicionou imagens do produto</p></div>}
                            <div className="price">{`R$ ${announcementData.price.toFixed(2).replace(".", ",")}`}</div>
                        </div>

                        {/* Dados do anunciante */}
                        <AdvertiserCard user={announcementData.user} />
                    </Grid>

                    {/* Descrição */}
                    <h1 className="session-title">Descrição do anúncio</h1>
                    <p className="description">{announcementData.description}</p>

                    {/* Localidade */}
                    <h1 className="session-title">Localidade</h1>
                    <div className="location">
                        <div className="info">
                            <h2>Bairro</h2>
                            <h3>{announcementData.user.address.neighbourhood}</h3>
                        </div>
                        <div className="info">
                            <h2>Estado</h2>
                            <h3>{announcementData.user.address.uf}</h3>
                        </div>
                        <div className="info">
                            <h2>Cidade</h2>
                            <h3>{announcementData.user.address.city}</h3>
                        </div>
                    </div>

                    {/* Categorias */}
                    <h1 className="session-title">Categoria</h1>
                    <div className="categories">
                        <div className="info">
                            <img src={announcementData.category.imageUrl} alt="categoria" />
                            <p>{announcementData.category.name}</p>
                        </div>
                        {announcementData.subcategory && <div className="info">
                            <img src={announcementData.subcategory.imageUrl} alt="subcategoria" />
                            <p>{announcementData.subcategory.name}</p>
                        </div>}
                    </div>

                    {/* Perguntas */}
                    <h1 className="session-title">Perguntas</h1>
                    <div className="questions-container">
                        {!authenticated && <span>Faça login para perguntar ao vendedor</span>}

                        {authenticated && announcementData.user.id !== id &&
                            <div className="ask">
                                <Input id="input-question" placeholder="Escreva sua pergunta" />
                                <Button onClick={createQuestion} disabled={loading}>{loading ?
                                    <div className="sweet-loading">
                                        <LoadingAnimation
                                            css={css`
                                            width: 100%;
                                        `}
                                            color={"#C87F20"}
                                            loading={loading}

                                        />
                                    </div> : <MdSend />}
                                </Button>
                            </div>}

                        {announcementData.questions.length === 0 && <span>Ninguem fez perguntas ainda</span>}
                        {announcementData.questions.map(question =>
                            <div key={question.id} className="question">
                                <div className="content">
                                    <MdMessage />
                                    <p>{question.question}<time>{new Date(question.createdAt).toLocaleString('pt-br')}</time></p>
                                </div>
                                {question.answer &&
                                    <div className="answer">
                                        <MdComment />
                                        <p>{question.answer} <time>{new Date(question.updatedAt).toLocaleString('pt-br')}</time></p>
                                    </div>}
                                {authenticated && announcementData.user.id === id && !question.answer &&
                                    <div className="to-reply">
                                        <Input id={`input-reply-${question.id}`} placeholder="Responder" />
                                        <Button disabled={loading} onClick={() => replyQuestion(question.id)}>{loading && buttonAnimation === question.id ?
                                            <div className="sweet-loading">
                                                <LoadingAnimation
                                                    css={css`
                                                    width: 100%;
                                                `}
                                                    color={"#C87F20"}
                                                    loading={loading}

                                                />
                                            </div> : <MdSend />}
                                        </Button>
                                    </div>}
                            </div>)}
                    </div>
                </Content>}
                <ToastContainer />
            </Container>
    )
}

export default Advertisement
