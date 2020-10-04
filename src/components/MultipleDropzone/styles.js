import styled from 'styled-components'
  
  export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: 1px dashed var(--black);
    border-radius: 8px;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
    transition: border .24s ease-in-out;
    min-height: 300px;

    h1{
        color: var(--black);
        margin-bottom: 5px;
        font-weight: 400;
    }

    aside{
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        h4{
            margin: 20px 0px;
        }

        .images{
            display: flex;
            justify-content: center;
        }
    }

    img{
        max-width: 33%;
        margin-right: 8px;

        border: 2px solid var(--primary);
        border-radius: 8px;
    }
  `;