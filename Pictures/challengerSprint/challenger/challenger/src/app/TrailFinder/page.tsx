'use client'
import React, { useState } from "react";
import "./css/estilo.css";
import respostaJson from "./respostas.json"; 

const TrailFinder = () => {
    const [formData, setFormData] = useState({
        name: '',
        rg: '',
        tipoEmpresa: '',
        setor: ''
    });
    // Pegando informação e inputando novos NOME e VALOR
    const InputFormulario = (evento:any) => {
        const { name, value } = evento.target;
        setFormData(arrayAnterior => ({
            ...arrayAnterior,
            [name]: value
        }));
    };

    const SubmissaoFormulario = (evento:any) => {
        evento.preventDefault(); //evitando o evento padrão do formulário

        // Pegando informação do formulário e transformando em variável
        const BuscarInformacao = {
            name: formData.name,
            rg: formData.rg,
            tipoEmpresa: formData.tipoEmpresa,
            setor: formData.setor
        };

        // adicionando informação ao array sem modificar o array original
        const AtualizarArray = [...respostaJson, BuscarInformacao];
        // transformando o array em JSON
        const FormularioJson = JSON.stringify(AtualizarArray);

        //SUBSTITUIÇÃO DO FETCH API
        const blob = new Blob([FormularioJson], { type: "application/json" });//Usando BLOB para substituir o uso do FETCH API
        const url = URL.createObjectURL(blob); //Criando uma URL para download 
        const link = document.createElement('a');
        link.href = url;
        link.download = 'dados_formularios.json'; //Fazendo o Download
        link.click(); //Pegando o click para realizar o Download


        setFormData({
            name: '',
            rg: '',
            tipoEmpresa: '',
            setor: ''
        });
    };

    return (
        <section className="secao-total">
            <form className="form card" onSubmit={SubmissaoFormulario}>
                <div className="card_header">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
                    </svg>
                    <h1 className="form_heading">TrailFinder</h1>
                </div>
                <div className="field">
                    <label htmlFor="name">Qual é o seu Nome</label>
                    <input className="input" name="name" type="text" placeholder="Nome" id="name" value={formData.name} onChange={InputFormulario} />
                </div>
                <div className="field">
                    <label htmlFor="rg">Qual é seu RG</label>
                    <input className="input" placeholder="RG" id="rg" name="rg" value={formData.rg} onChange={InputFormulario} />
                </div>
                <label htmlFor="tipoEmpresa">Qual o tipo da sua Empresa:</label>
                <select id="tipoEmpresa" name="tipoEmpresa" value={formData.tipoEmpresa} onChange={InputFormulario}>
                    <option value="">Qual?</option>
                    <option value="Pequena">Pequena</option>
                    <option value="Média">Média</option>
                    <option value="Grande">Grande</option>
                </select>
                <label htmlFor="setor">Qual o setor da sua empresa:</label>
                <select id="setor" name="setor" value={formData.setor} onChange={InputFormulario}>
                    <option value="">Qual?</option>
                    <option value="Automotivo">Automotivo</option>
                    <option value="Comunicações">Comunicações</option>
                    <option value="Bens de Consumo">Bens de Consumo</option>
                    <option value="Educação">Educação</option>
                    <option value="Energia & Utilities">Energia & Utilities</option>
                    <option value="Serviços Financeiros">Serviços Financeiros</option>
                    <option value="Saúde & Ciências da Vida">Saúde & Ciências da Vida</option>
                    <option value="Manufatura">Manufatura</option>
                    <option value="Mídia">Mídia</option>
                    <option value="Sem fins lucrativos">Sem fins lucrativos</option>
                    <option value="Setor Público">Setor Público</option>
                    <option value="Varejo">Varejo</option>
                    <option value="Tecnologia">Tecnologia</option>
                </select>
                <div className="field">
                    <button className="button-trailfinder" type="submit">ENVIE</button>
                </div>
            </form>
        </section>
    )
}

export default TrailFinder;
