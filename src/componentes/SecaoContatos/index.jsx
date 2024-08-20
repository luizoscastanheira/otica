/**
 *  Criando o componente SecaoContatos
 */
import Image from "next/image";
import Link from "next/link";
import estilos from "./SecaoContatos.module.css";

/**
 * Importando imagens
 */
import Local from "../../../public/local.png"
import Telefone from "../../../public/telefone.png"
import Email from "../../../public/email.png"
import Facebook from "../../../public/fb.png"
import Instagram from "../../../public/ig.png"
import Twitter from "../../../public/tt.png"

export default function SecaoContatos(){
    return(
        <section id="contato" className={estilos.containerBase}>
            <h3 id={estilos.titulo}>Fale Conosco</h3>
            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas 
            redes sociais ou da central de atendimento.</p>
            <div className={estilos.containerCards}>
                <div className={estilos.card}>
                    <h3>Nossos Contatos</h3>
                    <Image src={Local} className={estilos.imgContatos} alt="Imagem Endereço"/><span>Nova Iguaçu, RJ</span><br></br>
                    <Image src={Telefone} className={estilos.imgContatos} alt="Imagem Telefone"/><span>(21) 9999-9999</span><br></br>
                    <Image src={Email} className={estilos.imgContatos} alt="Imagem Email"/><span>contato@oticavida.com</span>
                </div>
                <div className={estilos.card}>
                    <h3>Nossas Redes Sociais</h3>
                    <Image src={Facebook} className={estilos.imgContatos} alt="Imagem FaceBook"/><span>/OticaVida</span><br></br>
                    <Image src={Instagram} className={estilos.imgContatos} alt="Imagem Instagran"/><span>@oticavidarj</span><br></br>
                    <Image src={Twitter} className={estilos.imgContatos} alt="Imagem Twitter"/><span>@oticavidarj</span>
                </div>
            </div>
        </section>
    );
}