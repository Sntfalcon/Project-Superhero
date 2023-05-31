import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { SuperheroApp } from './src/breackinbad/br-app';
import { SuperheroAppAlt } from './src/breackinbad/br-app copy';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://www.marvel.com/characters" target="_blank">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.dc.com/characters" target="_blank">
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
      
    </div>
  </div>
`;

const element = document.querySelector('.card');

SuperheroAppAlt( element );

