import {React, useEffect, useState} from 'react';
import './App.css';
import Header from '../src/components/Header';
import Presentation from './components/Presentation';
import About from './components/About';
import {BsGithub, BsLinkedin, BsInstagram} from 'react-icons/bs';
import Tecnologies from './components/Tecnologies';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App(){

  const [theme, setTheme ] = useState('dark');
  const [active, setMode ] = useState(false);
  const [mobile, setMobile] = useState(
    window.innerWidth < 800 ? true : false
  );

  const handleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const toggleMode = () => {
    setMode(!active)
  }

  useEffect(() => {

    window.addEventListener('resize', () => {
      if( window.innerWidth < 800) {
        setMobile(true)
        setMode(false)
      } else {
        setMobile(false)
        setMode(true)
      }
    })
  },[])

  return (
    <div className={theme === 'light' ? 'lightMode' : 'darkMode'}>
      <Header
        handleTheme = {handleTheme}
        theme={ theme }
        active = { active}
        toggleMode = { toggleMode }
        mobile = { mobile }
      />
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

export default App;

