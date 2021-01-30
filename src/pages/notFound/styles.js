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
            max-width: 112.5px;
            margin-right: 7.5px;
        }

        .link{
            color: var(--primary);
        }
    }
`