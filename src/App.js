import {React, Component} from 'react';
import './App.css';
import Header from '../src/components/Header';
import Presentation from './components/Presentation';
import About from './components/About';
import {BsGithub, BsLinkedin, BsInstagram} from 'react-icons/bs';
import Tecnologies from './components/Tecnologies';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import { connect } from 'react-redux';

class App extends Component {

  render() {
  const {theme} = this.props;
  return (
    <div className={theme === 'light' ? 'lightMode' : 'darkMode'}>
      <Header/>
      <Presentation />
      <About />
      <Tecnologies />
      <Projects />
      <Contacts />
      <div className='fixed-contacts'>
        <ul className='social-contact'>
          <li>
            <a href='https://github.com/igor93araujo' target="_blank" rel="noreferrer" className='social-icon'><BsGithub/></a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/barbosaigor16/'
            target="_blank" rel="noreferrer"
            className='social-icon'>
              <BsLinkedin/></a>
          </li>
          <li>
            <a href='https://www.instagram.com/igor20araujo/'target="_blank" rel="noreferrer"
            className='social-icon'>
              <BsInstagram/></a>
          </li>
          <li className='contact-line'></li>
        </ul>
      </div>
    </div>
  );
  }
}


const mapStateToProps = ({ themeReducer: { theme } }) => ({
  theme,
});

export default connect(mapStateToProps)(App);

