import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Projects.css';
import '../App.css';

import { projList } from '../helper/ProjectsBase';


export default function Projects() {

    return (
      <div className='fullWindow'>
      <h1>Projetos</h1>
      <Carousel
        id='projects'
        pause='hover'
      >
          {
            projList.map(({name, image, repo, deploy}, index) => (
              <Carousel.Item interval={3000}>
            <div className='projeto' key={index}>
              <p className='proj-title'>{name}</p>
              <div className='img-container'>
                <img src={image} alt={name} className='d-block w-100' />
              </div>
              <div className='proj-bts'>
                <a href={repo}
                className='repoLink'>Respositório</a>
                <a href={deploy}
                className='testLink'>Teste aqui</a>
              </div>
            </div>
      </Carousel.Item>
            ))
          }
    </Carousel>  
      </div>
    )
  }