import { Link } from "react-router-dom";
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
            <Link to={'/doctor_selection'}>
                <p>{title}</p>
            </Link>
        </Container>
    )
}