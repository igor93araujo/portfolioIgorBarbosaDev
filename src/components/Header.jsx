/* eslint-disable import/no-anonymous-default-export */
import {React} from 'react'
import '../App.css';
import { MdWorkspacesOutline } from 'react-icons/md';
import {BsFillMoonFill, BsSun} from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross1 } from 'react-icons/rx';

function Header(props){

  // render() {
    const {theme, handleTheme, active, toggleMode, mobile} = props;
    return (
      <header>
            <div className='logoHeader'>
              <MdWorkspacesOutline className='logoIcon'/>
            </div>
            <div>
              <div>
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
              </div>
              </div>
      </header>
    )
  }

export default Header;

