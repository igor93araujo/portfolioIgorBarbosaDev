/* eslint-disable import/no-anonymous-default-export */
import {React} from 'react'
import '../App.css';
import { MdWorkspacesOutline } from 'react-icons/md';
import {BsFillMoonFill, BsSun} from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx';

function Header(props){

  // render() {
    const {theme, handleTheme, active, toggleMode } = props;
    return (
      <header>
            <div className='logoHeader'>
              <MdWorkspacesOutline className='logoIcon'/>
            </div>
            <div className={ active ? 'menu menuOpen' : 'menu menuClose'}>
              <div className='list'>
                <ul className= 'listItems'>
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
              </div>
              </div>
            <div className={ theme === 'dark'? 'darkIcon' : 'lightIcon'} onClick={ toggleMode }>
              {
                active? 
                <RxCross1 className='hamburguer hamburguerIcon'/> : 
                <GiHamburgerMenu className='hamburguer hamburguerIcon'/>}
            </div>
      </header>
    )
  }

export default Header;

