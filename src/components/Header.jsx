/* eslint-disable import/no-anonymous-default-export */
import {React} from 'react'
import '../App.css';
import {BsFillMoonFill, BsSun} from 'react-icons/bs'

function Header(props){

  // render() {
    const {theme, handleTheme} = props;
    return (
      <header>
                <ul className='ul'>
                  {
                    theme === 'light' ?
                    <BsFillMoonFill 
                    onClick={handleTheme}
                    className='theme-icon'
                    />
                    :
                    <BsSun
                    onClick={ handleTheme}
                    className='theme-icon'
                    />
                  }
                  <li>
                    <a href="#about">
                      Sobre
                    </a>
                    </li>
                    <li>
                    <a href="#tecnologies">
                      Tecnologias
                    </a>
                    </li>
                    <li>
                    <a href="#projects">
                    Projetos
                    </a>
                    </li>
                    <li>
                    <a href="#contacts">
                      Contato
                    </a>
                    </li>
                    <li>
                    </li>
                </ul>
      </header>
    )
  }

export default Header;

