import React, { Component } from 'react'
import '../App.css';
import MovingComponent from 'react-moving-text'

export default class Presentation extends Component {
  render() {
    return (
      <section id="presentation">
      <div className='presentation-text'>
          <p className='firstP'>Olá! Que bom ter você aqui!</p>
          <p className='secondP'>Meu nome é</p>
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
           desenvolvedor web focado em Front-end com objetivo de tornar<br/> a vida das pessoas mais fácil com a criação de páginas web interativas,<br/>  de alta qualidade e responsivas.<br/><br/>
           </p>
      </div>
     </section>
    )
  }
}
