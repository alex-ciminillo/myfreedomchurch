import _ from 'lodash';
import './../stylesheets/style.css';
import BitBuddies from './game.js'

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
