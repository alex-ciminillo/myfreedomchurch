import $ from 'jquery'
import Cookies from 'js-cookie';

import GivePage from './../giving/givingpage.html'
import GivePageJS from './../giving/givingpage.js'


import FooterPageHtml from './../../components/footer/footerpage.html'
import FooterPageJS from './../../components/footer/footerpage.js'

import MenuPageHtml from './../../components/menu/menupage.html'
import MenuPageJS from '../../components/menuContent/menupage.js'

import WelcomeFormPageHtml from './../../components/welcomeform/welcomeformpage.html'
import WelcomeFormPageJS from './../../components/welcomeform/welcomeformpage.js'

import NavbarPageHtml from './../../components/navbar/navbarpage.html'
import NavbarPageJS from './../../components/navbar/navbarpage.js'

import UnderConstructionPageHtml from './../../components/underconstruction/underconstructionpage.html'
import UnderConstructionPageJS from './../../components/underconstruction/underconstructionpage.js'

import WelcomePic from './../../../images/homepage/congregation.jpeg'

export default function homepage() {

  $("#giving-intro-pic-img").attr("src", `${WelcomePic}`)

  document.getElementById("homepage-body-id").scrollIntoView();

  $("#under-construction-modal").load(`${UnderConstructionPageHtml}`, function () {
    UnderConstructionPageJS()
});

  $("#homepage-footer-all").load(`${FooterPageHtml}`, function () {
    FooterPageJS()

    // document.getElementById("homepage-welcome-text").scrollIntoView();
  });

  $("#homepage-menu").load(`${MenuPageHtml}`, function () {
    MenuPageJS()

    // document.getElementById("homepage-welcome-text").scrollIntoView();
  });

  $("#homepage-welcome-form").load(`${WelcomeFormPageHtml}`, function () {
    WelcomeFormPageJS()

    // document.getElementById("homepage-welcome-text").scrollIntoView();
  });

  $("#homepage-navbar").load(`${NavbarPageHtml}`, function () {
    NavbarPageJS()

    // document.getElementById("homepage-welcome-text").scrollIntoView();
    // document.getElementById("homepage-welcome-form").scrollIntoView();
  });

  addEventListeners()

}


function addEventListeners() {

  $("#homepage-get-to-know-us-right-sub-visit").on('click', function() {
    document.getElementById("homepage-map").scrollIntoView({ behavior: "smooth" });
  })

  $("#homepage-get-to-know-us-right-sub-chat").on('click', function() {
    document.getElementById("contact-us-form").scrollIntoView({ behavior: "smooth" });
  })


  $("#homepage-welcome-text-left-about-us").on('click', function(){
    $("#under-construction-body").removeClass("display-none")
    $("#under-construction-body").css("top", `${window.scrollY}px`);
    $("body").addClass("overflow-hidden")
  })

  $("#homepage-get-to-know-us-right-sub-prayer").on('click', function(){
    $("#under-construction-body").removeClass("display-none")
    $("#under-construction-body").css("top", `${window.scrollY}px`);
    $("body").addClass("overflow-hidden")
  })

}
