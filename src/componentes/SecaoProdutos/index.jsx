/**
 *  Criando o componente SecaoProdutos
 */
import estilos from "./SecaoProdutos.module.css"

import Image from "next/image";

import Oculos1 from "../../../public/oculos01.png"
import Oculos2 from "../../../public/oculos02.png"
import Oculos3 from "../../../public/oculos03.png"
import Oculos4 from "../../../public/oculos04.png"

export default function SecaoProdutos(){
    return(
        <section id="produtos" className={estilos.containerBase}>
            <div>
                <h3 id={estilos.tituloProdutos}>Nossos Produtos</h3>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos, masculino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e comtam com a melhor qualidade do mercado.</p>
            </div>
            
            <div className={estilos.containerCard}>
                <div className={estilos.card}>
                    <h4>Óculos de grau</h4>
                    <Image src={Oculos1} className={estilos.imgCard} alt="Imagem de um óculos de grau"></Image>
                    <p>R$ 500,00</p>
                </div>
                <div className={estilos.card}>
                    <h4>Óculos Transition</h4>
                    <Image src={Oculos2} className={estilos.imgCard} alt="Imagem de um óculos transiton"></Image>
                    <p>R$ 750,00</p>
                </div>
                <div className={estilos.card}>
                    <h4>Óculos de Sol</h4>
                    <Image src={Oculos3} className={estilos.imgCard} alt="Imagem de um óculos transiton"></Image>
                    <p>R$ 700,00</p>
                </div>
                <div className={estilos.card}>
                    <h4>Óculos Infantil</h4>
                    <Image src={Oculos4} className={estilos.imgCard} alt="Imagem de um óculos transiton"></Image>
                    <p>R$ 500,00</p>
                </div>
            </div>
            
            <div>
                <h3>Todos os nossos produtos incluem:</h3>
                <ul className={estilos.listaAjuste}>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Facilidade de Pagamento</li>
                </ul>
            </div>
        </section>
    );
}