import React,{useState} from 'react'
import {Container} from './styles'

import Button from '../Button'
import api from '../../services/api'

import {css} from '@emotion/core'
import LoadingAnimation from 'react-spinners/SyncLoader'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {useAuth} from '../../contexts/Auth'
import {Confirm} from 'react-st-modal'
import {useHistory} from 'react-router-dom'

const CardEditableAdvertisement = ({id, title, image, price, timestamp}) => {
    
    const {data, updateUserData} = useAuth()
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    async function deleteAdvertisement(id){

        const confirm = await Confirm("Todos os dados relacionados ao anúncio serão perdidos e não poderão ser recuperados.", 
            'Tem certeza que deseja excluir este anúncio?', 'Excluir', 'Cancelar');
          
        if (confirm) {
            try {
                setLoading(true)
                await api.delete(`/announcements/${id}`)

                toast.success("Anúncio excluído com sucesso")
    
                const adverts = data.adverts.filter(advertisement => advertisement.id !== id)
    
                updateUserData({
                    ...data,
                    adverts
                })
            } catch (err) {
                toast.error(err.response.data.message)
            }
            setLoading(false)
        }
    }

    function showAnnouncement(){
        history.push(`/advertisement/${id}`)
    }

    return (
        <Container onClick = {showAnnouncement}>
            <div className="content">
                <div className="image">
                    <img src={image} alt="teste"/>
                </div>
                <div className="info">
                <h1>{title}</h1>
                <h2>{price}</h2>
                    <hr/>
                </div>
            </div>
            <div className="footer">
            <span>{timestamp}</span>
                <div className="buttons">
                    <Button type = "button">Editar</Button>
                    <Button type = "button" onClick = {() => deleteAdvertisement(id)} disabled = {loading}>{loading ? <div className="sweet-loading">
                    <LoadingAnimation
                        css={css`
                        width: 100%;
                        `}
                        color={"white"}
                        loading={loading}

                    />
                </div> : "Excluir"}</Button>
                </div>
            </div>
        </Container>
    )
}

export default CardEditableAdvertisement
