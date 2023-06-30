import React, { Component } from 'react'
import '../App.css';
import git from '../images/gitLogo.png';
import html from '../images/htmlLogo.png';
import css from '../images/cssLogo.png';
import js from '../images/jsLogo.png';
import react from '../images/react-logo.png'
import jest from '../images/jest-logo.png'
import rtl from '../images/rtlLogo.png'

export default class Tecnologies extends Component {
  render() {
    return (
      <div className='techDescriptions' id="tecnologies">
      <h1>Tecnologias</h1>
      <div className='techTitleNImgs'>
          <p> Aqui há algumas tecnologias que já trabalhei <br/>
          <ul className='hardSkills'>
                <a
                href='https://en.wikipedia.org/wiki/Git'
                target='_blank' rel="noreferrer">
                  <li>GIT<img src={git} alt="Logo_git" className='gitIcon'/></li></a>
                <a
                href='https://en.wikipedia.org/wiki/HTML5'
                target='_blank' rel="noreferrer"
                >
                  <li>HTML 5<img src={html} alt="Logo_html"/></li></a>
                <a 
                  href='https://en.wikipedia.org/wiki/CSS'
                  target='_blank' rel="noreferrer"
                >
                  <li>CSS<img src={css} alt='cssLogo'/></li></a>
                <a 
                href='https://en.wikipedia.org/wiki/JavaScript'
                target='_blank' rel="noreferrer"><li>JavaScript<img src={js} alt="javascript_logo"/></li></a>
                <a href='https://react.dev/' target='_blank' rel="noreferrer">
                  <li>ReactJs<img src={react} alt="reactLogo"/></li></a>
                <a href='https://jestjs.io/pt-BR/' target='_blank' rel="noreferrer"><li>Jest<img src={jest} alt="reactLogo"/></li></a>
                <a href='https://testing-library.com/docs/react-testing-library/intro/' target='_blank' rel="noreferrer"><li>RTL<img src={rtl} alt="rtlLogo"/></li></a>
            </ul>
      </p>
      </div>
      </div>
    )
  }
}
