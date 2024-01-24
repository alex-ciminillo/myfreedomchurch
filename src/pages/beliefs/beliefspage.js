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
    $("#gospel-text").on('click', function(){
        $("#gospel-display").removeClass("display-none");
    });
}
