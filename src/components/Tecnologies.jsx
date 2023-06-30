import React, { Component } from 'react'
import '../App.css';
import { TechsList } from '../helper/TechsBase';


export default class Tecnologies extends Component {
  render() {
    return (
      <div className='techDescriptions' id="tecnologies">
      <h1>Tecnologias</h1>
      <div className='techTitleNImgs'>
          <p> Aqui há algumas tecnologias que já trabalhei <br/>
          <ul className='hardSkills'>
               {
                  TechsList.map((tech) => (
                    <li
                      key={tech.name}
                      className='tech'
                      onClick={() => window.open(tech.href, '_blank')}
                    >
                      <img src={tech.image} alt={tech.name} />
                      <p>{tech.name}</p>
                    </li>
                  ))
               }
            </ul>
      </p>
      </div>
      </div>
    )
  }
}
