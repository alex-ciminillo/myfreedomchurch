import $ from 'jquery'
import Cookies from 'js-cookie';

import GivePage from './../../pages/giving/givingpage.html'
import GivePageJS from './../../pages/giving/givingpage.js'

import HomePage from './../../pages/homepage/homepage.html'
import HomePageJS from '../../pages/homepage/homepage.js'

export default function footerpage() {

  addEventListeners()

  // document.getElementById("contact-us-form").scrollIntoView();

  if (!Cookies.get("church")) {

  }


}




function addEventListeners() {

  //footer icons
  $("#homepage-footer-email-icon").on('click', function () {
    document.getElementById("contact-us-form").scrollIntoView({ behavior: "smooth" });
  })

  $("#homepage-footer-question-icon").on('click', function () {
    document.getElementById("contact-us-form").scrollIntoView({ behavior: "smooth" });
  })

  $("#homepage-footer-phone-icon").on()

  $("#footer-log-in").on('click', function () {
    console.log('footer')
    $("#homepage-menu-cover").css("top", `${window.scrollY}px`);
    $("#homepage-navbar").addClass("position-static")
    $("#homepage-navbar").addClass("display-none")
    $("#homepage-menu-cover").removeClass("display-none")

    $("#sign-in").removeClass("display-none")

    setTimeout(() => {
      $("#homepage-menu-cover").addClass("opacity-one")
    }, 1)
    $("body").addClass("overflow-hidden")
  })


  //footer give
  $("#homepage-footer-bottom-text-give-information").on('click', function () {
    $("body").load(`${GivePage}`, function () {
      GivePageJS()
    });
  })

}
