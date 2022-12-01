import logo from "../../assets/logo.png";
import { Container } from "./styles";

export function Navbar(){
    return(
        <Container>
            <div className="navbar__itens">
                <img src={logo} alt="logo da empresa" />
                <ul>
                    <li><a href="#"><p>Agendar consulta</p></a></li>
                    <li><a href="#"><p>Sobre</p></a></li>
                </ul>
            </div>

            <div className="navbar__authentication">
                <a href="#"><p>Entrar</p></a>
                <div className="navbar__authentication-button"><a href="#"><p className="navbar__authentication-button-title">Criar conta</p></a></div>
            </div>
        </Container>
    )
}