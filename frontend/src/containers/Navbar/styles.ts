import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 5rem;

    img {
        height: 180px;
        width: 180px;
    }

    a p {
        margin: 0 1.5rem;
        font-size: 1.5rem;
        font-family: var(--font-family);
        color: var(--font-primary);

        transition: margin-top 0.5s, opacity 0.5s;

        :hover {
            margin-top: -10px;
            opacity: 0.5;
        }
    }

    .navbar__itens {
        display: flex;
        align-items: center;

        ul {
            display: flex;
        }
    }

    .navbar__authentication{
        display: flex;
        align-items: center;

        .navbar__authentication-button {
            background-color: var(--bg-button);

            margin-left: 2.5rem;
            padding: 1.5rem 0.2rem;
            border-radius: 12px;

            cursor: pointer;

            transition: margin-top 0.5s, opacity 0.5s;

            :hover {
                margin-top: -10px;
                opacity: 0.5;
            }
            
            .navbar__authentication-button-title {
                color: #FFF;

                :hover {
                    margin-top: 0;
                    opacity: 1;
                }
            }
        }
    }
`