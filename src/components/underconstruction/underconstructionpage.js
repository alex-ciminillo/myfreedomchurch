import $ from 'jquery'
import Cookies from 'js-cookie';

import GivePage from './../../pages/giving/givingpage.html'
import GivePageJS from './../../pages/giving/givingpage.js'

import UnderConstructionImg from './../../../images/underconstruction.png'

export default function underconstructionpage() {

  $("#under-construction-body-img").attr("src", `${UnderConstructionImg}`)

  

  addEventListeners()
  
  // document.getElementById("contact-us-form").scrollIntoView();
}




function addEventListeners() {

  $("#under-construction-body").on('click', function(){
    $("#under-construction-body").addClass("display-none")
    $("body").removeClass("overflow-hidden")
  })
 
}