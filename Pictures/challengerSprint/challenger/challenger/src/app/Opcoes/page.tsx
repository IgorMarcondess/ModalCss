'use client'
import React from "react";
import Link from "next/link";
import "./css/style.css"
import opcoes from "./opcoes.json"


interface dados{
    src: string;
    text: string;
    href: string;
}

const Opcoes = () => {
    return(
        <>
            <section className="opcoes-section">
                <div>
                    <div className="layout-opcoes">
                       <Link href="https://trailhead.salesforce.com/pt-BR" target="_blank">
                        <h1 className="titulo-opcoes">TrailHeader</h1></Link>
                    </div>
                    <div className="layout-opcoes">
                        <Link href="https://www.salesforce.com/br/" target="_blank">
                            <h1 className="titulo-opcoes">SalesForce</h1></Link>
                    </div>
                    <div className="layout-opcoes">
                        <Link href="https://www.salesforce.com/br/products/marketing-cloud/overview/" target="_blank">
                            <h1 className="titulo-opcoes">Marketing Cloud</h1></Link>
                    </div>
                </div>
            </section>
            <section>
                <h1 className="titulo-clientes">Veja os cliente que trabalham com a Salesforce</h1>
                <div>
                    <div className="imagens-clientes">
                        {opcoes.map ((item : dados) =>(
                            <div>
                                <ul className="imagem-lista">
                                    <Link href={item.href}><img className="imagens-opcoes" src={item.src} /></Link>
                                </ul>
                                <ul className="texto-imagens-opcoes">
                                    <li className="li-imagens">{item.text}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Opcoes;
