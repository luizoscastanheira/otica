/**
 *  Criando o componente Rodape
 */
import estilos from "./Rodape.module.css"

export default function Rodape(){
    return(
        <footer className={estilos.container}>
            <p>© 2022 Óticas Vida. - Todos os direitos reservados.</p>
        </footer>
    );
}