import $ from 'jquery'
import Cookies from 'js-cookie';

import FooterPageHtml from './../../components/footer/footerpage.html'
import FooterPageJS from './../../components/footer/footerpage.js'

import MenuPageHtml from './../../components/menu/menupage.html'
import MenuPageJS from './../../components/menu/menupage.js'

import WelcomeFormPageHtml from './../../components/welcomeform/welcomeformpage.html'
import WelcomeFormPageJS from './../../components/welcomeform/welcomeformpage.js'

import NavbarPageHtml from './../../components/navbar/navbarpage.html'
import NavbarPageJS from './../../components/navbar/navbarpage.js'

import UnderConstructionPageHtml from './../../components/underconstruction/underconstructionpage.html'
import UnderConstructionPageJS from './../../components/underconstruction/underconstructionpage.js'

export default function beliefspage() {

    addEventListeners()
    document.getElementById("homepage-body-id").scrollIntoView();

    $("#under-construction-modal").load(`${UnderConstructionPageHtml}`, function () {
        UnderConstructionPageJS()
    });

    $("#giving-footer-all").load(`${FooterPageHtml}`, function () {
        FooterPageJS()
    });

    $("#giving-menu").load(`${MenuPageHtml}`, function () {
        MenuPageJS()
    });

    $("#giving-welcome-form").load(`${WelcomeFormPageHtml}`, function () {
        WelcomeFormPageJS()
    });

    $("#giving-navbar").load(`${NavbarPageHtml}`, function () {
        NavbarPageJS()
    });


}

function addEventListeners() {
    // $(".beliefs-key-text").on('click', function () {
    //     const displayId = $(this).data("display");
    //     hideAllDisplays();
    //     $("#" + displayId).removeClass("display-none");

    //     $(".beliefs-key-text").removeClass("small-button");

    //     $(this).addClass("small-button");
    // });

    $(".selector-detail").on('click', function () {
        const displayId = $(this).data("display");
        hideAllDisplays();
        $("#" + displayId).removeClass("display-none");

        $(this).addClass("selector-button").removeClass("selector-button-plain");
        $(".selector-detail").not(this).removeClass("selector-button").addClass("selector-button-plain");

        $(".selector-text").text($(this).text());

        // const correspondingId = $(this).data("corresponding");
        // const correspondingElements = $("[data-corresponding='" + correspondingId + "']");

        // correspondingElements.addClass("selector-button").removeClass("selector-button-plain");

        // $(".selector-text").text($(this).text());
    });

    $(".beliefs-point").on('click', function () {
        const displayId = $(this).data("display");
        const displayElement = $("#" + displayId);

        displayElement.slideToggle(600);
    });

    // mobile toggle functionality for the selector
    $(".selector-mobile, .s-d-mobile").on('click', function () {
        let display = $(".s-d-c-mobile").css("display")

        let delay = display !== "none" ? 200 : 0;

        setTimeout(function() {
            $(".s-d-c-mobile").slideToggle(500);
        }, delay)
    });

    $(document).ready(function () {
        $('.sliding-underline').on('click', function () {
            $(this).toggleClass('clicked');
        })
    })
}

function hideAllDisplays() {
    $(".beliefs-value > div").addClass("display-none");
}

$(document).ready(function () {
    addEventListeners();
})
