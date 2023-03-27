import React, { Component } from 'react';
import image from '../images/IMG_20220925_180308-removebg-preview.png'
import '../App.css';

export default class About extends Component {
  render() {
    return (
      <section id='about'>
      <div id="fullDescription">
        <div className='textDescription' >
        <h1>Sobre mim</h1>
            <p><span className='span'>Oi! Boas vindas!</span> <br/>
            Me chamo Igor Barbosa de Araújo,sou um desenvolver web focado em front-end e resido em Contagem, MG.
            <br/>Em Abril de 2022 tive meu primeiro contato técnico com tecnologia e programação por meio dos estudos de algorítimos e lógica de programação e com o  <span className='span'>Front-end</span>.
            <br/>
            A partir deste momento, me descobri fascinado por esse universo, podendo não só escrever códigos, mas impactar positivamente a vida de outras pessoas.
        </p>
        </div>
        <img id="foto-igor" src={image} alt="Igor com camisa cinza em pé"/>
        </div>
        </section>
    )
  }
}
