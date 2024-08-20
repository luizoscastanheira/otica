import Head from "next/head";
import estilos from "@/styles/Home.module.css";

import Topo from "@/componentes/Topo"
import SecaoCapa from "@/componentes/SecaoCapa";
import SecaoProdutos from "@/componentes/SecaoProdutos";
import SecaoSobre from "@/componentes/SecaoSobre";
import SecaoContatos from "@/componentes/SecaoContatos";
import Rodape from "@/componentes/Rodape"

export default function Home() {
  return (
    <>
      <Head>
        <title>Óticas Vida - Loja de Óculos</title>
        <meta name="description" content="Página de Teste - Ótica" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       
      </Head>
      <Topo />
      <SecaoCapa />
      <SecaoProdutos />
      <SecaoSobre />
      <SecaoContatos/>
      <Rodape />
    </>
  );
}
