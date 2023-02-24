import React, { useState, useEffect, useRef } from 'react'
import './Projects.css';
import '../App.css';

import { projList } from '../helper/ProjectsBase';

import { motion } from 'framer-motion';


export default function Projects() {

  const carrosel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
  }, [])

    return (
      <div className='fullWindow'>
      <h1>Projetos</h1>
      <motion.div ref={carrosel} className='carrosel' id='projects' whileTap={{cursor: 'grabbing'}}>
        <motion.div className='inner'
        drag="x"
        dragConstraints={{ right:0, left: -width}}
        >
          {
            projList.map(({name, image, repo, deploy}, index) => (
            <motion.div className='projeto' key={index}>
              <p className='proj-title'>{name}</p>
              <img src={image} alt={name} className='proj-img' />
              <div className='proj-bts'>
                <a href={repo}
                className='repoLink'>Respositório</a>
                <a href={deploy}
                className='testLink'>Teste aqui</a>
              </div>
            </motion.div>
            ))
          }

        </motion.div>
      </motion.div>
      </div>
    )
  }

