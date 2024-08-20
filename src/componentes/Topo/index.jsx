/**
 * Criando o componente de topo
 */
import Image from "next/image";
import Link from "next/link";
import estilos from "./Topo.module.css";


import Logo from '../../../public/logo.png';

export default function Topo(){
    return(
        <header id="topo" className={estilos.cabecalho}>
            <div className={estilos.larguraMax}>
                <Image className={estilos.imgLogotipo} src={Logo} alt="Logotipo" />
                <nav className={estilos.menuTopo}>
                    <Link className={estilos.itemMenu} href="#produtos">PRODUTOS</Link>
                    <Link className={estilos.itemMenu} href="#sobre">SOBRE</Link>
                    <Link className={estilos.itemMenu} href="#contato">CONTATO</Link>
                </nav>
            </div>
        </header>
    );
}