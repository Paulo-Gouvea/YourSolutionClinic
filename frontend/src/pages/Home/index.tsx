import { Container } from "./styles"
import { Navbar, Header } from "../../containers"

export function Home(){
    return (
        <Container>
            <div className="header__bg">
                <Navbar />
                <Header />
            </div>

        </Container>
    )
}