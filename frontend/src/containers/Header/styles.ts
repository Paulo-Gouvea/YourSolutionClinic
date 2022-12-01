import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    padding: 0 12rem;
    
    section {
        .header__title {
            h1 {
                font-size: 4rem;
                font-family: var(--font-family);
                color: var(--font-primary);
                line-height: 80px;
            }
        }

        .header__text {
            margin: 3rem 0;

            p {
                font-size: 1.4rem;
                font-family: var(--font-family);
                color: var(--font-secondary);
                line-height: 40px;
            }
        }
    }

    img {
        height: 600px;
    }
`