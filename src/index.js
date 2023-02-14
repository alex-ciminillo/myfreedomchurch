import _ from 'lodash';
import './../stylesheets/style.css';
import BitBuddies from './game.js'


// to run game with hot reload, open index.html with vscode live server and then run 'npm run watch'

function component() {
    const outerDiv = document.createElement('div');
    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // canvas.style.width = `${window.innerWidth}px`;
    // canvas.style.height = `${window.innerHeight}px`;
    outerDiv.classList.add('outerDiv');
    canvas.classList.add('canvas');
    outerDiv.appendChild(canvas);
    
    return [outerDiv, canvas];
  }
  let arr = component()
  document.body.appendChild(arr[0]);
  const game = new BitBuddies(arr[1]);
