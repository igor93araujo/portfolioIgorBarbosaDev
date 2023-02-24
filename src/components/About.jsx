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
            <p> Oi! Boas vindas! <br/>
            Me chamo Igor Barbosa de Araújo, tenho 30 anos, moro em Contagem, MG. Sou graduado como
            médico veterinário desde dezembro de 2021, porém estou em <span className='span'>transição de carreira</span>, estudando desenvolvimento web
            fullstack na <span className='span'>Trybe</span>.<br/><br/>
            Como não tive contato com a área de programação durante minha trajetória de vida, não me havia passado pela
            cabeça adentrar nesse mundo nos últimos anos, até que em março de 2022, decidi buscar um pouco mais sobre a
            área após um relato de um amigo. Desde então, estou apaixonado por programação e quero que essa seja minha trajetória.<br/><br/>
           Meu foco atual é o desenvolvimento web voltado para <span className='span'>front-end</span>.<br/><br/>
        </p>
        </div>
        <img id="foto-igor" src={image} alt="Igor com camisa cinza em pé"/>
        </div>
        </section>
    )
  }
}
