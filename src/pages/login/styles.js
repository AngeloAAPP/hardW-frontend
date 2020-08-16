import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    background: var(--primary-dark)
`

export const LeftSide = styled.div`
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 8px solid var(--primary-dark);

`

export const RightSide = styled.div`
    background: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 8px solid var(--primary-dark);
`

export const ContainerForm = styled.div`

    padding: 25px;

    *.legend{
        color: var(--gray-light);
        font-size: 20px;
        font-weight: 300;
        display: block;
    }

    input + a{
        margin: 20px 0;
    }

    a{
        color: var(--gray-light);
        text-decoration: none;
        display: block;
        max-width: max-content;

        &:hover{
            text-decoration: underline
        }
    }

    span{
        margin-top: 80px;
    }
`
