/**
 * Criando o componente SecaoCapa
 * 
 * section className={estilos.capaContainer}
 * 
 */
import Image from "next/image";
import estilos from "./SecaoCapa.module.css";
import responsivo from "./responsivo.module.css"


export default function SecaoCapa(){
    return(
       <section className={[estilos.capaContainer, responsivo.capaContainer].join(" ")}>
            <div className={estilos.containerBase}>
                <div>
                    <p>Preços baixos em</p>
                    <h1>Óculos de grau e de sol</h1>
                    <p>Você só encontra aqui</p>
                </div>
            </div>
       </section> 
    );
}