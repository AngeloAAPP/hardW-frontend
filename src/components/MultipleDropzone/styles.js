import styled from 'styled-components'
  
  export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border: 1px dashed var(--black);
    border-radius: 8px;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: border .24s ease-in-out;
    min-height: 225px;

    .dropzone{

        p.default{
            display: block;

            @media(max-width: 800px){
                display: none;   
            }
        }

        p.mobile{
            display: none;

            @media(max-width: 800px){
                display: block;   
            }
        }
    }


    h1{
        color: var(--black);
        margin-bottom: 3.75px;
        font-weight: 400;
    }

    aside{
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        h4{
            margin: 15px 0px;
        }

        .images{
            display: flex;
            justify-content: center;
            align-content: center;
            flex-wrap: wrap;
        }
    }

    img{
        max-width: 33%;
        margin-right: 8px;
        margin-top: 8px;

        border: 2px solid var(--primary);
        border-radius: 8px;

        @media(max-width: 800px){
            max-height: 80px;        
        }
    }
  `;