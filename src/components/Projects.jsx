import React, { Component } from 'react'
import NetflixCLone from '../Gifs/netflixCloneGif.gif';
import TrybeTunes from '../Gifs/TrybeTunesIgor.gif';
import Lanchonete from '../Gifs/lanchonete.gif';
import trivia from '../Gifs/trivia.gif';
import tribeWallet from '../Gifs/trybeWallet.gif';

export default class Projects extends Component {
  render() {
    return (
      <div className='projectsDescriptions' id='projects'>
      <h1>Projetos </h1>
      <div className='projectTitleNImgs'>
          <img src={trivia} alt="gitImageLanchonete" className='proj-img' />
          <div className='projectDescrip'>
            <div className='projDescripLeft'>
          <p className='proj-title'>Trivia Game</p>
          <p className='proj-text'>Aplicação desenvolvida em um time de 5 integrantes. É um jogo que tem como objetivo desafiar o usuário a responder 5 perguntas de conhecimentos gerais, podendo ser de múltipla escolha ou verdadeiro/falso. Ao final, o usuário recebe um feedback dos acertos e sua pontuação, pode reiniciar um jogo ou ver o ranking com as maiores pontuações ordenadas da maior para a menor.</p>
          </div>
          <div className='projDescripRight'>
          <p>Skills envolvidas:</p>
          <ul>
            <li>Trabalho em equipe</li>
            <li>Gestão do tempo</li>
            <li>Comunicação</li>
            <li>Scrum e Kanban</li>
            <li>React Redux</li>
            <li>API Request</li>
            <li>Media query</li>
          </ul>
          <a href='https://lnkd.in/dNVfFiVe' className='repoLink'>Respositório</a>
          <a href='https://lnkd.in/d2kNC4H8' className='testLink'>Teste aqui</a>
          </div>
          </div>
      </div>
      <div className='projectTitleNImgs'>
          <img src={tribeWallet} alt="gitImageLanchonete" className='proj-img' />
          <div className='projectDescrip'>
            <div className='projDescripLeft'>
          <p className='proj-title'>Trybe Wallet</p>
          <p className='proj-text'>Nesse projeto criamos uma aplicação que simula uma carteira de despesas onde podemos adicioná-las, editá-las e excluí-las, havendo também a conversão da despesa para a moeda real caso o usuário deseje adicionar em outras moedas, oriundas de uma API livre.</p>
          </div>
          <div className='projDescripRight'>
          <p>Skills envolvidas:</p>
          <ul>
            <li>Gestão do tempo</li>
            <li>Scrum e Kanban</li>
            <li>JavaScript</li>
            <li>React Redux</li>
            <li>API Request</li>
            <li>Utilização da biblioteca <a href='https://react-icons.github.io/react-icons'>ReactIcons</a></li>
          </ul>
          <a href='https://lnkd.in/dNVfFiVe' className='repoLink'>Respositório</a>
          <a href='https://lnkd.in/d2kNC4H8' className='testLink'>Teste aqui</a>
          </div>
          </div>
      </div>
      <div className='projectTitleNImgs'>
          <img src={Lanchonete} alt="gitImageLanchonete" className='proj-img' />
          <div className='projectDescrip'>
            <div className='projDescripLeft'>
          <p className='proj-title'>Lanchonete Online</p>
          <p className='proj-text'>Consiste em uma aplicação web de uma lanchonete. Nela se pode buscar e filtrar produtos por nome, adicionar e removê-los ao carrinho de compra e simulação da página de compra dos itens selecionados. Realizado em dupla com amigo <a href='https://www.linkedin.com/in/jefferson-donizete-do-nascimento-a381b2212/?originalSubdomain=br'>Jefferson Donizete</a>em pair programming.</p>
          </div>
          <div className='projDescripRight'>
          <p>Tecnologias abordadas:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Utilização da biblioteca <a href='https://react-icons.github.io/react-icons'>ReactIcons</a></li>
          </ul>
          <a href='https://github.com/igor93araujo/pagina-lanchonete' className='repoLink'>Respositório</a>
          <a href='https://lanchonete-store-mk6aquall-igor93araujo.vercel.app/' className='testLink'>Teste aqui</a>
          </div>
          </div>
      </div>
      <div className='projectTitleNImgs'>
          <img src={NetflixCLone} alt="netflix" className='proj-img' />
          <div className='projectDescrip'>
            <div className='projDescripLeft'>
          <p className='proj-title'>Netflix Clone</p>
          <p className='proj-text'>Essa aplicação tem como objetivo reproduzir a tela inicial do site do netflix por meio do consumo de uma API pública da própria empresa. Com ela pode-se navegar entre as catergorias de filmes e séries e ver quais os ítens estão contidos em determinado tema.</p>
          </div>
          <div className='projDescripRight'>
          <p>Tecnologias abordadas:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>API Request</li>
            <li>Manipulação da biblioteca <a href='https://mui.com/'>Materal/UI</a></li>
          </ul>
          <a href='https://github.com/igor93araujo/NetflixClone' className='repoLink'>Respositório</a>
          <a href='https://netflix-clone-snowy-iota.vercel.app/' className='testLink'>Teste aqui</a>
          </div>
          </div>
      </div>
      <div className='projectTitleNImgs'>
          <img src={TrybeTunes} alt="trybetunesimage" className='proj-img' />
          <div className='projectDescrip'>
            <div className='projDescripLeft'>
          <p className='proj-title'>Trybe Tunes</p>
          <p className='proj-text'>Essa é uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.</p>
          </div>
          <div className='projDescripRight'>
          <p>Tecnologias abordadas:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>API Request</li>
            <li>Manipulação de rotas com React Router Dom</li>
            <li>Utilização da biblioteca <a href='https://react-icons.github.io/react-icons'>ReactIcons</a></li>
          </ul>
          <a href='https://github.com/igor93araujo/trybetunes-project' className='repoLink'>Respositório</a>
          <a href='https://trybetunes-project-seven.vercel.app/' className='testLink'>Teste aqui</a>
          </div>
          </div>
      </div>
      </div>
    )
  }
}
