import doctor from '../../assets/smiling-doctor.png'
import { Container } from "./styles";
import { Button } from '../../components';

export function Header(){
    return(
        <Container>
            <section>
                <div className="header__title">
                    <h1>Cuide de si mesmo</h1>
                    <h1>com a melhor solução</h1>
                </div>

                <div className="header__text">
                    <p>Na YourSolutionClinic, entregamos aos nossos pacientes as melhores opções</p>
                    <p>de tratamento com o objetivo de ajudá-los em obter a vida saudável.</p>
                </div>

                <Button 
                    onClick={() => console.log('teste')}
                    title={'Agendar Consulta'}
                />
            </section>
            <img src={doctor} alt="" />
        </Container>
    )
}