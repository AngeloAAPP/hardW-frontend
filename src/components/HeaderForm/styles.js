import styled from 'styled-components'

export const Container = styled.div`
    >h1{
        font-size: 40px;
        color: var(--white);
        font-weight: 400;

        @media(max-width: 800px) {
            font-size: 30px;
        }
    }
    >h2{
        font-size: 18px;
        font-weight: 400;
        color: var(--gray-light);
        max-width: 315px;
        margin-top: 8px;

        @media(max-width: 800px) {
            font-size: 14px;
        }
    }
`