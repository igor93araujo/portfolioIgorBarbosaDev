import React, { Component } from 'react'
import { AiOutlinePhone, AiOutlineMail} from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import {BsGithub, BsLinkedin, BsInstagram} from 'react-icons/bs';
import '../App.css';

export default class Contacts extends Component {
  render() {
    return (
      <div className='contactContainer' id='contacts' >
      <h1>Contato</h1>
          <p>Se tiver gostado do conteúdo, pode falar comigo por aqui:</p>
          <ul>
            <li>
              <AiOutlinePhone /> / 
              <a href="https://api.whatsapp.com/send?phone=31994220001">
              <FaWhatsapp /></a>+55 31 99422-0001
            </li>
          <li>
              <AiOutlineMail />igoraraujobda@gmail.com
            </li>
          <li>
            <a href='https://www.linkedin.com/in/barbosaigor16/'
            target="_blank" rel="noreferrer"
            className='social-icon'>
              <BsLinkedin/> LinkedIn</a>
          </li>
            <li>
            <a href='https://github.com/igor93araujo' target="_blank" rel="noreferrer" className='social-icon'><BsGithub/> GitHub</a>
          </li>
          <li>
            <a href='https://www.instagram.com/igor20araujo/'target="_blank" rel="noreferrer"
            className='social-icon'>
              <BsInstagram/> Instagram</a>
          </li>
          </ul>
          </div>
    )
  }
}
