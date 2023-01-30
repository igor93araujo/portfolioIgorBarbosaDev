/* eslint-disable import/no-anonymous-default-export */
import {React, Component} from 'react'
import '../App.css';
import { MdWorkspacesOutline } from 'react-icons/md';
import {BsFillMoonFill, BsSun} from 'react-icons/bs'
import { SetTheme } from '../redux/actions';
import { connect } from 'react-redux';

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
              <ul className='header-tags'>
{/*               {
              theme === 'dark' ? 
              <p className='hoverMessage'>Você tem certeza disso? Então coloque óculos de proteção! </p>
             : <p className='hoverMessage'>Eu avisei!</p>
            } */}
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
            </div>

      </header>
    )
  }
}

const mapStateToProps = ({ themeReducer: { theme } }) => ({
  theme,
});

export default connect(mapStateToProps)(Header);

