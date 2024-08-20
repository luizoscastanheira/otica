/**
 *  Criando o componente SecaoSobre
 */
import Image from "next/image";
import Loja from "../../../public/loja.png"
import Atendimento from "../../../public/atendimento.png"


import estilos from "./SecaoSobre.module.css";

export default function SecaoSobre(){
    return(
        <section id="sobre" className={estilos.containerBase}>
            <div id={estilos.quemSomos}>
            <h3>QUEM SOMOS NÓS?</h3>
            <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas Vida iniciou suas atividades focada no 
                atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente 
                bom atendimento, qualidade e preço baixo.
            </p>
            </div>
            
            <div className={estilos.containerCards}>
                <div className={estilos.card}><Image src={Loja} className={estilos.imageCard} alt="Imagem da Loja"></Image></div>
                <div className={estilos.card}>
                    <h4>NOSSAS FILIAIS</h4>
                    <p>Hoje Temos mais de 20 filiais pelo Brasil e na América.</p>
                </div>
                <div className={estilos.card}>
                    <h4>ATENDIMENTO FLEXÍVEL</h4>
                    <p>Nossa equipe é treinada para te atender!</p>
                </div>
                <div className={estilos.card}><Image src={Atendimento} className={estilos.imageCard} alt="Imagem de Atendimento"></Image></div>
            </div>
        </section>
    );
}