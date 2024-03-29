import $ from 'jquery'
import Cookies from 'js-cookie';

import GivePage from './../../pages/giving/givingpage.html'
import GivePageJS from '../../pages/giving/givingpage.js'

import BeliefsPage from './../../pages/beliefs/beliefspage.html'
import BeliefsPageJS from '../../pages/beliefs/beliefspage.js'

import HomePage from './../../pages/homepage/homepage.html'
import HomePageJS from '../../pages/homepage/homepage.js'

import ChurchLogo from './../../../images/ChurchLogo.svg'



export default function menupage() {

    $("#homepage-navbar-left-logo").attr("src", `${ChurchLogo}`)

    addEventListeners()

    // document.getElementById("contact-us-form").scrollIntoView();
}


function addEventListeners() {

    $("#homepage-menu-cover-navbar-logo").on('click', function () {
        $("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(() => {
            $("#homepage-menu-cover").addClass("display-none")
            $("#homepage-navbar").removeClass("position-static")
            $("#homepage-navbar").removeClass("display-none")
            $("body").removeClass("overflow-hidden")
        }, 400)

        $("body").load(`${HomePage}`, function () {
            HomePageJS()
        });

    })



    $("#homepage-menu-cover-navbar-exit").on('click', function () {

        $("#homepage-menu-cover").removeClass("opacity-one")
        $("#homepage-menu-cover-body").addClass("display-none")
        $("#sign-in").addClass("display-none")
        setTimeout(() => {
            $("#homepage-menu-cover").addClass("display-none")
            $("#homepage-navbar").removeClass("position-static")
            $("#homepage-navbar").removeClass("display-none")
            $("body").removeClass("overflow-hidden")
        }, 400)
    })



    $("#homepage-menu-cover-body-right-contact-us").on('click', function () {
        $("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(() => {
            $("#homepage-menu-cover").addClass("display-none")
            $("#homepage-navbar").removeClass("position-static")
            $("#homepage-navbar").removeClass("display-none")
            $("body").removeClass("overflow-hidden")

            document.getElementById("contact-us-form").scrollIntoView({ behavior: 'smooth' });

        }, 400)
    })

    $("#homepage-menu-cover-body-right-get-prayer").on('click', function () {
        $("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(() => {
            $("#homepage-menu-cover").addClass("display-none")
            $("#homepage-navbar").removeClass("position-static")
            $("#homepage-navbar").removeClass("display-none")
            $("body").removeClass("overflow-hidden")

            document.getElementById("contact-us-form").scrollIntoView({ behavior: 'smooth' });

        }, 400)
    })

    $("#homepage-menu-cover-body-right-give-online").on('click', function () {

        $("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(() => {
            $("#homepage-menu-cover").addClass("display-none")
            $("#homepage-navbar").removeClass("position-static")
            $("#homepage-navbar").removeClass("display-none")
            $("body").removeClass("overflow-hidden")

            $("body").load(`${GivePage}`, function () {
                GivePageJS()
            });

        }, 400)
    })

    $("#menu-beliefs").on('click', function () {
        // console.log("beliefs")
        $("#homepage-menu-cover").removeClass("opacity-one");
        // $("#menu-beliefs").addClass("display-none");

        setTimeout(() => {
            $("#homepage-menu-cover").addClass("display-none");
            $("#homepage-navbar").removeClass("position-static");
            $("#homepage-navbar").removeClass("display-none");
            $("body").removeClass("overflow-hidden");


            $("body").load(`${BeliefsPage}`, function () {
                BeliefsPageJS()
            });
            // Clear previous content
            $("#menu-content-container").html("");

            // Load menuContent.html into menu-content-container
            $("#menu-content-container").load('../menuContent/menuContent.html', function () {
                // Load menupage.js from the menuContent folder
                $.getScript('../menuContent/menupage.js', function () {
                    // Optionally, call a function if there is JavaScript specific to menuContent.html
                    // For example, assuming there is a function called menuContentJS
                    menuContentJS();
                });
            });
        }, 400);
    });

    $("#homepage-menu-cover-body-right-our-location").on('click', function () {
        $("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(() => {
            $("#homepage-menu-cover").addClass("display-none")
            $("#homepage-navbar").removeClass("position-static")
            $("#homepage-navbar").removeClass("display-none")
            $("body").removeClass("overflow-hidden")

            document.getElementById("homepage-map").scrollIntoView({ behavior: 'smooth' });

        }, 400)
    })

    $("#homepage-menu-cover-body-left-top-location").on('click', function () {
        $("#homepage-menu-cover").removeClass("opacity-one")
        setTimeout(() => {
            $("#homepage-menu-cover").addClass("display-none")
            $("#homepage-navbar").removeClass("position-static")
            $("#homepage-navbar").removeClass("display-none")
            $("body").removeClass("overflow-hidden")

            document.getElementById("homepage-map").scrollIntoView({ behavior: 'smooth' });

        }, 400)
    })

}
