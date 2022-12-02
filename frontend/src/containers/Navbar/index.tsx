import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Container } from "./styles";

export function Navbar(){
    return(
        <Container>
            <div className="navbar__itens">
                <img src={logo} alt="logo da empresa" />
                <ul>
                    <li>
                        <Link to={`/doctor_selection`}>
                            <p>Agendar consulta</p>
                        </Link>
                    </li>
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