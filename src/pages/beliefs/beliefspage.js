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
    $(".selector-detail").on('click', function () {
        const displayId = $(this).data("display");
        hideAllDisplays();
        $("#" + displayId).removeClass("display-none");

        $(this).addClass("selector-button").removeClass("selector-button-plain");
        $(".selector-detail").not(this).removeClass("selector-button").addClass("selector-button-plain");

        $(this).addClass("change-color-to").removeClass("change-color-from");
        $(".selector-detail").not(this).removeClass("change-color-to").addClass("change-color-from");

        $(".selector-text").text($(this).text());
    });

    $(".button-container").on('click', function () {
        // const displayId = $(this).data("display");
        // hideAllDisplays();
        // $("#" + displayId).removeClass("display-none");

        // $(this).addClass("selector-button").removeClass("selector-button-plain");
        // $(".selector-detail").not(this).removeClass("selector-button").addClass("selector-button-plain");

        // $(this).addClass("change-color-to").removeClass("change-color-from");
        // $(".selector-detail").not(this).removeClass("change-color-to").addClass("change-color-from");

        // $(".selector-text").text($(this).text());

        let status = $(this).find(".moving-background").hasClass("move-right");

        console.log("status: ", status)
        if (!status) {
            $(this).find(".moving-background").removeClass("move-left").addClass("move-right");
            // status = !status;
        }
        else {
            $(this).find(".moving-background").removeClass("move-right").addClass("move-left");
            // status = !status;
        }



        // $(this).find(".moving-background").addClass("move-right").removeClass("move-left");


        // $(this).find(".moving-background").not(this).removeClass("move-right").addClass("move-left");

        // $(".moving-background").addClass("move-right").removeClass("move-left");
        // $(".moving-background").not(this).removeClass("move-right").addClass("move-left");

    });

    // $(".selector-detail").on('click', function () {
    //     const displayId = $(this).data("display");
    //     hideAllDisplays();
    //     $("#" + displayId).removeClass("display-none");

    //     $(".selector-detail").removeClass("selector-button active").addClass("selector-button-plain");
    //     $(this).addClass("selector-button active").removeClass("selector-button-plain");

    //     $(".selector-button.active").css('background-position', '0 100%');
    //     $(".selector-text").text($(this).text());
    // });

    $(".beliefs-point").on('click', function () {
        const displayId = $(this).data("display");
        const displayElement = $("#" + displayId);

        displayElement.slideToggle(600);
        $(this).find('.arrow-size').toggleClass('no-transform');
    });

    // mobile toggle functionality for the selector
    $(".selector-mobile, .s-d-mobile").on('click', function () {
        let windowWidth = $(window).width();
        if (windowWidth <= 768) {

            let display = $(".s-d-c-mobile").css("none")

            let delay = display !== "none" ? 200 : 0;

            // $(".s-d-c-mobile").slideToggle(200);
            setTimeout(function () {
                $(".s-d-c-mobile").slideToggle(500);
            }, delay)
        }
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

$(document).ready(function () {
    // Function to update based on screen width
    function updateScreen() {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 769) $(".s-d-c-mobile").removeAttr("style");
    }

    // Initial call to set styles on page load
    updateScreen();

    // Event listener for screen resize
    $(window).resize(function () {
        updateScreen();
    });
});
