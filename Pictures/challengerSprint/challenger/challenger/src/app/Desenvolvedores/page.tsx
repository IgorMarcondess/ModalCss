'use client'
import React from "react";
import Link from "next/link";
import "./css/style.css"
import fotos from "./fotos.json"

interface dados{
    id: number;
    src: string;
    text: string;
    text2: string;
}

const Desenvolvedores = () => {
    return(
        <>
            <h1 className="titulo-desenvolvedores">Desenvolvedores</h1>
            <section className="secao-desenvolvedores">
                 <div className="layout-desenvolvedores">
                    {fotos.map ((item1 : dados) =>(

                        <div className="imagens-paginaInicial">
                            <div className="layout-quadrado-desenvolvedores">
                                <a className="layout-imagem-desenvolvedores">
                                    <img className="formatacao-imagem-desenvolvedores" src={item1.src} />
                                </a>
                                <ul className="texto-imagem-desenvolvedores">
                                    <li>{item1.text}</li>
                                </ul>
                                <ul className="texto-imagem-desenvolvedores">
                                    <li>{item1.text2}</li>
                                </ul>
                            </div>
                        </div> ))}
                </div>
            </section>
            <Link href="https://github.com/Marcondezz/sprintThree-SalesForce" target="_blank"><h1 className="github">CLIQUE AQUI PARA ACESSAR O REPOSITÓRIO NO GITHUB</h1></Link>
        </>
    )
}
export default Desenvolvedores;