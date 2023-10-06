import $ from 'jquery'
import Cookies from 'js-cookie';

import GivePage from './../../pages/giving/givingpage.html'
import GivePageJS from './../../pages/giving/givingpage.js'



export default function footerpage() {

  addEventListeners()
  
  // document.getElementById("contact-us-form").scrollIntoView();

  if (!Cookies.get("church")) {
    
  }


}




function addEventListeners() {

  //footer icons
  $("#homepage-footer-email-icon").on('click', function(){
    document.getElementById("contact-us-form").scrollIntoView({ behavior: "smooth" });
  })

  $("#homepage-footer-question-icon").on('click', function(){
    document.getElementById("contact-us-form").scrollIntoView({ behavior: "smooth" });
  })

  $("#homepage-footer-phone-icon").on()

  //footer give
  $("#homepage-footer-bottom-text-give-information").on('click', function(){
    $( "body" ).load( `${GivePage}`, function() {
        GivePageJS()
      });
  })

}




