import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, button, input{
        font-family: Roboto, sans-serif
    }

    ul{
       list-style: none;
    }

    
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;
        width: 100%;
        height: 100%;
    }

    body{
        background: var(--gray-light)
    }

    //Customiza o modal do pacote react-st-modal
    #stfDialogPlace{

        button{
            cursor: pointer;
            outline-color: var(--primary);

            &:first-child{
                background-color: red;
            }

            &:nth-child(2){
                background-color: var(--white);
                color: var(--primary-dark);
            }
        }

        
    }

    input, button{border: none}

    :root {
        --primary: #F99615;
        --primary-dark: #C87F20;
        --white: #fff;
        --placeholder-input-white: #C4C4C4;
        --text-btn-login: #FFF9F2;
        --gray-light: #F0F0F5;
        --black: #000;
        --black-light: #4D4747;
        --label-advert: #666262;
        --green-whatsapp: #00E676;
    }
`

export default GlobalStyle