import styled from "styled-components";

export const Container = styled.div`
    padding: 1.5rem;
    max-width: 230px;
    max-height: 80px;
    border-radius: 8px;
    background-color: var(--font-primary);

    font-size: 1.5rem;
    color: var(--white);

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    transition: opacity 1s;

    a {
        color: #FFF;

        :hover {
            opacity: 1;
        }
    }

    :hover {
        opacity: 0.5;
    }
`;