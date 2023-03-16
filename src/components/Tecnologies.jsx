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
                <li>GIT<img src={git} alt="Logo_git" className='gitIcon'/></li>
                <li>HTML 5<img src={html} alt="Logo_html"/></li>
                <li>CSS<img src={css} alt='cssLogo'/></li>
                <li>JavaScript<img src={js} alt="javascript_logo"/></li>
                <li>React<img src={react} alt="reactLogo"/></li>
                <li>Jest<img src={jest} alt="reactLogo"/></li>
                <li>RTL<img src={rtl} alt="rtlLogo"/></li>
            </ul>
      </p>
      </div>
      </div>
    )
  }
}
