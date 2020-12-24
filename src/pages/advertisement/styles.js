import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 50px;

    .title{
        h1{
            font-size: 20px;
            font-weight: 600;
        }
        h2{
            color: var(--label-advert);
            font-weight: 200;
            font-size: 14px;
            margin-top: 5px;
        }
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 15px;
    gap: 15px;
`