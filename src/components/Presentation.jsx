import React, { Component } from 'react'
import '../App.css';

export default class Presentation extends Component {
  render() {
    return (
      <section id="presentation">
      <div className='presentation-text'>
          <p className='firstP'>Olá! Que bom ter você aqui!</p>
          <p className=''>Meu nome é</p>
           <p className='thirdP'>Igor Barbosa.</p>
           <p className='forthP'>
           Sou um veterinário em transição de carreira indo com tudo para o mundo de desenvolvimento web.<br/>
           Sou aluno da Trybe e atualmente estou focando em frontend.</p>
      </div>
     </section>
    )
  }
}
