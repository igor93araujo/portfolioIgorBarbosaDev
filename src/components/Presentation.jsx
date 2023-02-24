import React, { Component } from 'react'
import '../App.css';
import MovingComponent from 'react-moving-text'

export default class Presentation extends Component {
  render() {
    return (
      <section id="presentation">
      <div className='presentation-text'>
          <p className='firstP'>Olá! Que bom ter você aqui!</p>
          <p className=''>Meu nome é</p>
          <MovingComponent
            type="shadow"
            duration="1000ms"
            delay="0s"
            direction="alternate-reverse" 
            timing="linear"
            iteration="infinite"
            fillMode="both"
            >
            <p className='thirdP'>Igor Barbosa,</p>
          </MovingComponent>
           <p className='forthP'>
           um veterinário em transição de carreira indo com tudo para o mundo de desenvolvimento web.<br/><br/>
           Sou aluno da Trybe e atualmente estou focando em front-end.</p>
      </div>
     </section>
    )
  }
}
