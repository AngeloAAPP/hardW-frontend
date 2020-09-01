import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-top: 50px;

    h1{
        background: red;
        width: max-content;
    }
`

export const Menu = styled.nav`
    display: flex;
    justify-content: center;

    ul{
        
        li{
            background: var(--white);
            padding: 15px 50px;
            cursor: pointer;

            &:hover,
            &.active
            {
                background: var(--primary);
                color: var(--white);
            }

            &:first-child{
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
            }

            &:last-child{
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
            }
        }
    }
`