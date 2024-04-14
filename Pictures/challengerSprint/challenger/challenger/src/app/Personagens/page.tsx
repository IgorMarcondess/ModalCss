'use client'
import React from "react";
import "./css/Personagens.css"
import Einstein from "/public/assets/Personagens_PI/einstein.png"
import Appy from "/public/assets/Personagens_PI/appy.png"
import Astro from "/public/assets/Personagens_PI/astro.png"
import Cloudy from "/public/assets/Personagens_PI/cloudy.png"
import Codey from "/public/assets/Personagens_PI/codey.png"
import Hootie from "/public/assets/Personagens_PI/hootie.png"
import Max from "/public/assets/Personagens_PI/max.png"
import Ruth from "/public/assets/Personagens_PI/ruth.png"
import Blaze from "/public/assets/Personagens_PI/blaze.png"
import Koa from "/public/assets/Personagens_PI/koa.png"

//--------------------------------------------------------------------

const Personagens = () => {
    return(
    <>  
        <nav className="navegacao-personagens">
            <section>
                <div className="conjunto-propositos-personagens">
                    <a><img src={ Einstein.src } className="personagem-esquerda-personagens"/></a>
                    <div className="texto-esquerda-personagens">
                            <h1 className="titulo-esquerda-personagens">Einstein</h1>
                            <h2 className="subtitulo-personagens"><b>O gênio de todos</b></h2>
                            <p className="texto-esquerda">Einstein é o cientista de dados da Salesforce. Nasceu em 2016 e foi criado com base em um dos maiores gênios da história mundial.
                                 Além de super rápido, ele é o cérebro por trás da inteligência artificial da empresa. 
                                 Tem um produto que leva seu nome: 
                                 uma plataforma unificada que identifica oportunidades de vendas, prevê resultados e 
                                 faz recomendações inteligentes. </p>
                            <p className="texto-esquerda">É um eterno solucionador de problemas e ajuda você a aprender mais sobre seus clientes. 
                                 Brilhante e altruista, 
                                 Einstein está sempre pronto para ajudá-lo a se tornar mais experiente e inovador. 
                                Outros produtos que ele oferece são o Einstein Sales Cloud e Einstein Analytics.</p>
                    </div>
                </div>
                <br />
                <div className="conjunto-propositos-personagens">
                    <div className="texto-direita-personagens">
                        <h1 className="titulo-direita-personagens">APPY</h1>
                        <h2 className="subtitulo-personagens"><b>Sua guia no ecossistema de parceiros</b></h2>
                        <p className="texto-direita">A Appy representa ISVs, parceiros e AppExchange. Ela surgiu em 2017, sabe muito sobre todas as coisas da
                         Salesforce e é a mascote certa para ajudar na navegação do ecossistema do AppExchange para resolver desafios de negócios </p>
                        <p className="texto-direita">Ela também é considerada um conector, pois se não souber a resposta, ela usa sua extensa rede para conectar 
                        as pessoas certas e resolver seus problemas. 
                        A Appy acredita nas pessoas e inspira empreendedores do mundo todo a viver os sonhos e transformar os negócios.</p>
                    </div>
                    <a><img src={ Appy.src } className="personagem-direita-personagens"/></a> 
                </div>
                <br />
                <div className="conjunto-propositos-personagens">
                    <a><img src={ Astro.src } className="personagem-esquerda-personagens"/></a>
                    <div className="texto-esquerda-personagens">
                            <h1 className="titulo-esquerda-personagens">ASTRO</h1>
                            <h2 className="subtitulo-personagens"><b>O guia da Salesforce</b></h2>
                            <p className="texto-esquerda">Astro é o seu guia amigável para tudo na Salesforce e ajuda você a se tornar o melhor em tudo o que deseja fazer. 
                            Nasceu em 2014 e representa comunidade e inclusão, incentivando a todos a atingirem seus objetivos sem medo de experimentar coisas novas</p>
                            <p className="texto-esquerda">É curioso e adora viajar, aprender e fazer novas amizades. 
                            Sua identidade de gênero é não-binária para representar os valores de diversidade e inclusão de nossa empresa.</p>
                    </div>
                </div>
                <br />
                <div className="conjunto-propositos-personagens">
                    <div className="texto-direita-personagens">
                        <h1 className="titulo-direita-personagens">CLOUDY</h1>
                        <h2 className="subtitulo-personagens"><b>Mantém todos unidos e no caminho certo</b></h2>
                        <p className="texto-direita">Inteligente e cheia de experiência em tecnologia, Cloudy nasceu em 2015 e é responsável por criar aplicativos inovadores na nuvem. Fiel ao seu nome, 
                        ela está sempre no centro da ação e tem um imenso conhecimento de tudo relacionado ao armazenamento de dados na nuvem.</p>
                        <p className="texto-direita">Cloudy representa os administradores da Salesforce, 
                        traz à tona o melhor de todos e incentiva você a explorar seu próprio potencial ilimitado</p>
                    </div>
                    <a><img src={ Cloudy.src } className="personagem-direita-personagens"/></a> 
                </div>
                <br />
                <div className="conjunto-propositos-personagens">
                    <a><img src={ Codey.src } className="personagem-esquerda-personagens"/></a>
                    <div className="texto-esquerda-personagens">
                            <h1 className="titulo-esquerda-personagens">CODEY</h1>
                            <h2 className="subtitulo-personagens"><b>O urso que inspira desenvolvedores e criadores pelo mundo</b></h2>
                            <p className="texto-esquerda">É quase impossível não notar Codey: um urso lidando com projetos e 
                            sujando as patas, seja codificando e desenvolvendo um aplicativo ou servindo café com leite como um Bearista.</p>
                            <p className="texto-esquerda">Nascido em 2015, ele representa os desenvolvedores da Salesforce e inspira você a 
                            construir qualquer coisa usando cliques ou códigos. Embora pareça grande e destemido, Codey é muito 
                            carismático e adora dar abraços de urso. Ele é o mascote que vai trazer diversão aos seus projetos criativos..</p>
                    </div>
                </div>
                <br />
                <div className="conjunto-propositos-personagens">
                    <div className="texto-direita-personagens">
                        <h1 className="titulo-direita-personagens">HOOTIE</h1>
                        <h2 className="subtitulo-personagens"><b>O sábio em busca do sucesso e novos aprendizados</b></h2>
                        <p className="texto-direita">Hootie é uma coruja que representa Trailhead Academy. 
                        Ele ajuda você a conquistar novas habilidades, ganhar credenciais e buscar sucesso na sua carreira da melhor forma.</p>
                        <p className="texto-direita">É muito sábio, está sempre em busca de novos aprendizados e acredita que, com preparação e 
                        estudo, sua carreira pode alcançar novos patamares. Voe como Hootie e consiga o emprego dos seus sonhos!</p>
                    </div>
                    <a><img src={ Hootie.src } className="personagem-direita-personagens"/></a> 
                </div>
                <br />
                <div className="conjunto-propositos-personagens">
                    <a><img src={ Max.src } className="personagem-esquerda-personagens"/></a>
                    <div className="texto-esquerda-personagens">
                            <h1 className="titulo-esquerda-personagens">MAX</h1>
                            <h2 className="subtitulo-personagens"><b>O herói de integrações na sua empresa</b></h2>
                            <p className="texto-esquerda">Max pode ser considerado um chutador de códigos e um defensor de desenvolvedores por onde passa.</p>
                            <p className="texto-esquerda">Ele representa integração, e combina força e velocidade para transportar dados e códigos para integrações mais rápidas.
                             Seu trabalho é conectar todos os mundos: aplicativos, dados e dispositivos para uma união digna de herói.</p>
                    </div>
                </div>
                <br />
                <div className="conjunto-propositos-personagens">
                    <div className="texto-direita-personagens">
                        <h1 className="titulo-direita-personagens">RUTH</h1>
                        <h2 className="subtitulo-personagens"><b>A guia da comunidade dos arquitetos</b></h2>
                        <p className="texto-direita">A Ruth representa arquitetos, engenheiros e plataformas. Ela é uma arquiteta técnica certificada e 
                        muito simpática, que cria sistemas e soluções que dão suporte a toda a empresa.</p>
                        <p className="texto-direita">É responsável, com mentalidade aberta e muito ágil, e acima de tudo, humilde, 
                        pois se preocupa em compartilhar conhecimento com a comunidade</p>
                    </div>
                    <a><img src={ Ruth.src } className="personagem-direita-personagens"/></a> 
                </div>
                <br />
                <div className="conjunto-propositos-personagens">
                    <a><img src={ Koa.src } className="personagem-esquerda-personagens"/></a>
                    <div className="texto-esquerda-personagens">
                            <h1 className="titulo-esquerda-personagens">KOA</h1>
                            <h2 className="subtitulo-personagens"><b>O melhor amigo das pequenas empresas</b></h2>
                            <p className="texto-esquerda">Koa, o Cachorro, representa amor e longevidade, além de Salesforce Essentials para Pequenas Empresas. 
                            Como um bom cachorro, ele ama a todos e sempre arruma tempo para trabalhar e se divertir.</p>
                            <p className="texto-esquerda">A maior alegria de Koa é arrancar sorrisos, e sempre será seu fiel companheiro.
                             Faça o que você ama e conte com o seu melhor amigo para estar sempre ao seu lado.</p>
                    </div>
                </div>
                <br />
                <div className="conjunto-propositos-personagens">
                    <div className="texto-direita-personagens">
                        <h1 className="titulo-direita-personagens">BLAZE</h1>
                        <h2 className="subtitulo-personagens"><b>Seu guia para alcançar o customer success</b></h2>
                        <p className="texto-direita">Blaze é o seu guia confiável na trilha dos negócios. 
                        Ela representa o sucesso do cliente e conhece todos os caminhos para ajudar você a conquistar o seu espaço.</p>
                        <p className="texto-direita">Blaze sabe que o caminho pode conter armadilhas e obstáculos, 
                        por isso ela conhece tudo e você pode confiar de ter ao lado na sua jornada com a Salesforce.</p>
                    </div>
                    <a><img src={ Blaze.src } className="personagem-direita-personagens"/></a> 
                </div>
            </section>
        </nav>
    </>
    )
}
export default Personagens;
