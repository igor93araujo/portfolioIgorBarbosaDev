import React, { useState, useEffect, useRef } from 'react'
import './Projects.css';
import '../App.css';

import { projList } from '../helper/ProjectsBase';


export default function Projects() {

  const carrosel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
  }, [])

    return (
      <div className='fullWindow'>
      <h1>Projetos</h1>
      <div ref={carrosel} className='carrosel' id='projects'>
        <div className='inner'>
          {
            projList.map(({name, image, repo, deploy}, index) => (
            <div className='projeto' key={index}>
              <p className='proj-title'>{name}</p>
              <img src={image} alt={name} className='proj-img' />
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

