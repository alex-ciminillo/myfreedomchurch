import _ from 'lodash';
import './../stylesheets/style.css';
import './../stylesheets/homepage.css';
import './../stylesheets/giving.css';
import './../stylesheets/beliefs.css';
import './../stylesheets/footer.css';
import './../stylesheets/underconstruction.css';
import HomePage from './pages/homepage/homepage.html'
import HomePageJS from './pages/homepage/homepage'

import GivePage from './pages/giving/givingpage.html'
import GivePageJS from './pages/giving/givingpage.js'

import BeliefsPage from './pages/beliefs/beliefspage.html'
import BeliefsPageJS from './pages/beliefs/beliefspage.js'
import $ from 'jquery'



const start = () => {

  $( "body" ).load(
    `${HomePage}`,
    // `${GivePage}`,
    // `${BeliefsPage}`,
    function() {
    HomePageJS()
    // GivePageJS()
    // BeliefsPageJS()
  });


}

$(document).ready(function(){
  start()
})
