/* eslint-disable import/no-anonymous-default-export */
import {React, useState} from 'react'
import '../App.css';
import {BsFillMoonFill, BsSun} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx';

function Header(props){

    const {theme, handleTheme} = props;
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
      setMenu(!menu);
    }

    return (
      <header>
                <ul
                  className={menu ? 'menu-open' : 'menu-close'}
                >
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
                <div
                  className='menu'
                  onClick= {handleMenu}
                >
                  {
                    menu ?
                    <RxCross2
                    className='menu-icon'
                    />
                    :
                    <GiHamburgerMenu
                    className='menu-icon'
                    />
                  }
                </div>
      </header>
    )
  }

export default Header;

