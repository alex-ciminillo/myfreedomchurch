import $ from 'jquery'
import Cookies from 'js-cookie';

import GivePage from './../../pages/giving/givingpage.html'
import GivePageJS from './../../pages/giving/givingpage.js'

import HomePage from './../../pages/homepage/homepage.html'
import HomePageJS from './../../pages/homepage/homepage.js'

import ChurchLogo from './../../../images/ChurchLogo.svg'

export default function menupage() {

    $("#homepage-navbar-left-logo").attr("src", `${ChurchLogo}`)

  addEventListeners()
  
  // document.getElementById("contact-us-form").scrollIntoView();
}


function addEventListeners() {

    $("#homepage-menu-cover-navbar-logo").on('click', function(){
        $("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(()=>{
            $("#homepage-menu-cover").addClass("display-none")
            $("#homepage-navbar").removeClass("position-static")
            $("#homepage-navbar").removeClass("display-none")
            $("body").removeClass("overflow-hidden")
        }, 400)

        $( "body" ).load( `${HomePage}`, function() {
            HomePageJS()
          });

    })



    $("#homepage-menu-cover-navbar-exit").on('click', function(){
        
        $("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(()=>{
            $("#homepage-menu-cover").addClass("display-none")
            $("#homepage-navbar").removeClass("position-static")
            $("#homepage-navbar").removeClass("display-none")
            $("body").removeClass("overflow-hidden")
        }, 400)
    })



    $("#homepage-menu-cover-body-right-contact-us").on('click', function(){
        $("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(()=>{
            $("#homepage-menu-cover").addClass("display-none")
            $("#homepage-navbar").removeClass("position-static")
            $("#homepage-navbar").removeClass("display-none")
            $("body").removeClass("overflow-hidden")

            document.getElementById("contact-us-form").scrollIntoView({behavior: 'smooth'});

        }, 400)
    })

    $("#homepage-menu-cover-body-right-get-prayer").on('click', function(){
        $("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(()=>{
            $("#homepage-menu-cover").addClass("display-none")
            $("#homepage-navbar").removeClass("position-static")
            $("#homepage-navbar").removeClass("display-none")
            $("body").removeClass("overflow-hidden")

            document.getElementById("contact-us-form").scrollIntoView({behavior: 'smooth'});

        }, 400)
    })

    $("#homepage-menu-cover-body-right-give-online").on('click', function(){
        
        $("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(()=>{
            $("#homepage-menu-cover").addClass("display-none")
            $("#homepage-navbar").removeClass("position-static")
            $("#homepage-navbar").removeClass("display-none")
            $("body").removeClass("overflow-hidden")

            $( "body" ).load( `${GivePage}`, function() {
                GivePageJS()
              });

        }, 400)
    })


    $("#homepage-menu-cover-body-right-our-location").on('click', function(){
        $("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(()=>{
            $("#homepage-menu-cover").addClass("display-none")
            $("#homepage-navbar").removeClass("position-static")
            $("#homepage-navbar").removeClass("display-none")
            $("body").removeClass("overflow-hidden")

            document.getElementById("homepage-map").scrollIntoView({behavior: 'smooth'});

        }, 400)
    })

    $("#homepage-menu-cover-body-left-top-location").on('click', function(){
        $("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(()=>{
            $("#homepage-menu-cover").addClass("display-none")
            $("#homepage-navbar").removeClass("position-static")
            $("#homepage-navbar").removeClass("display-none")
            $("body").removeClass("overflow-hidden")

            document.getElementById("homepage-map").scrollIntoView({behavior: 'smooth'});

        }, 400)
    })

}




