import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .content{
        display: flex;
        align-items: center;

        img{
            max-width: 150px;
            margin-right: 10px;
        }

        .link{
            color: var(--primary);
        }
    }
`