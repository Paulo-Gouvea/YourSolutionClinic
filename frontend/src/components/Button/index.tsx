import { Container } from "./styles"

interface ButtonProps {
    onClick: () => void;
    title: string;
}

export function Button({
    onClick,
    title
}: ButtonProps){
    return (
        <Container
            onClick={onClick}
        >
            <p>{title}</p>
        </Container>
    )
}