import React from 'react'
import './Projects.css';
import '../App.css';

import { projList } from '../helper/ProjectsBase';


export default function Projects() {

    return (
      <div className='fullWindow'>
      <h1>Projetos</h1>
      <div className='carrosel' id='projects'>
        <div className='inner'>
          {
            projList.map(({name, image, repo, deploy}, index) => (
            <div className='projeto' key={index}>
              <p className='proj-title'>{name}</p>
              <div className='img-container'>
                <img src={image} alt={name} className='proj-img' />
              </div>
              <div className='proj-bts'>
                <a href={repo}
                className='repoLink'>Respositório</a>
                <a href={deploy}
                className='testLink'>Teste aqui</a>
              </div>
            </div>
            ))
          }

        </div>
      </div>
      </div>
    )
  }

