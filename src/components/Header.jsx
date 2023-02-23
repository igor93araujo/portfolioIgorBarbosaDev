/* eslint-disable import/no-anonymous-default-export */
import {React, Component} from 'react'
import '../App.css';
import { MdWorkspacesOutline } from 'react-icons/md';
import {BsFillMoonFill, BsSun} from 'react-icons/bs'
import { SetTheme } from '../redux/actions';
import { connect } from 'react-redux';

import { slide as Menu } from 'react-burger-menu'

class Header extends Component {

  handleTheme = () => {
    const { dispatch } = this.props;
    dispatch(SetTheme(this.state));

  }

  render() {

    const {theme} = this.props;
    return (
      <header>
            <div>
              <MdWorkspacesOutline className='logoIcon'/>
            </div>
            <div>
              <Menu elastic width={ 180 } height={ 350 } >
              <ul className='header-tags'>
                {
                  theme === 'light' ?
                  <BsFillMoonFill 
                  onClick={ this.handleTheme}
                  className='theme-icon'
                  />
                  :
                  <BsSun
                  onClick={ this.handleTheme}
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
             </Menu>
            </div>

      </header>
    )
  }
}

const mapStateToProps = ({ themeReducer: { theme } }) => ({
  theme,
});

export default connect(mapStateToProps)(Header);

