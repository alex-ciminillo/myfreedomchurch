import $ from 'jquery'
import Cookies from 'js-cookie';

import GivePage from './../../pages/giving/givingpage.html'
import GivePageJS from './../../pages/giving/givingpage.js'

export default function footerpage() {

    emailjs.init('user_3QADtTkcQCMCjuoNaTOIB');

  addEventListeners()
  
  // document.getElementById("contact-us-form").scrollIntoView();
}

function validateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#contact-us-form-bottom-right-email").val()))
  {
    return true
  }
    alert("You have entered an invalid email address")
    return false
}

function sendEmail() {

    $("#contact-us-form-bottom-right-form-form").on("submit", function(e) {
        e.preventDefault();
    });

    if ($("#contact-us-form-bottom-right-first-name").val() && $("#contact-us-form-bottom-right-email").val() && $("#contact-us-form-bottom-right-last-name").val() && validateEmail()) {
        let templateParams = {
            from_name: `${$("#contact-us-form-bottom-right-first-name").val()} ${$("#contact-us-form-bottom-right-last-name").val()}`,
            from_email: `${$("#contact-us-form-bottom-right-email").val()}`,
            from_phone: `${$("#contact-us-form-bottom-right-phone").val()}`,
            location: `${Cookies.get("church").charAt(0).toUpperCase() + Cookies.get("church").slice(1)}`,
            message: `Someone filled out the contact form on the Freedom Church - ${Cookies.get("church").charAt(0).toUpperCase() + Cookies.get("church").slice(1)} website. That means they want someone to reach out to them about the church.`
        };
        if ($("#contact-us-form-bottom-right-input-message").val()) {
            templateParams.message = `Someone filled out the contact form on the Freedom Church - ${Cookies.get("church").charAt(0).toUpperCase() + Cookies.get("church").slice(1)} website. Here is what they said: \n\n ${$("#contact-us-form-bottom-right-input-message").val()}`
        }
        
        // these IDs from the previous steps

        $(".contact-us-form-bottom-right-name").addClass("opacity-half")
        $(".contact-us-form-bottom-right-input").addClass("opacity-half")
        $("#contact-us-form-bottom-right-submit-button").addClass("opacity-half")
        $('#contact-us-form-bottom-right-submit-button').prop('disabled', true)
        $("#contact-us-form-loader").removeClass("display-none")
        let template;
        Cookies.get("church") === "lima" ? template = 'template_or188h3' : template = 'template_c97f2fg'
        emailjs.send('service_9adaa6d', template, templateParams)
            .then(function() {
                console.log('SUCCESS!');
                $("#contact-us-form-bottom-right-form").addClass("display-none")
                $("#contact-us-form-bottom-right-thanks").removeClass("display-none")
                $("#contact-us-form-loader").addClass("display-none")
                $(".contact-us-form-bottom-right-name").removeClass("opacity-half")
        $(".contact-us-form-bottom-right-input").removeClass("opacity-half")
        $("#contact-us-form-bottom-right-submit-button").removeClass("opacity-half")

            }, function(error) {
                alert("Sorry! Sending failed, please try again.")
                $("#contact-us-form-loader").addClass("display-none")

                $(".contact-us-form-bottom-right-name")[0].removeClass("opacity-half")
        $(".contact-us-form-bottom-right-input")[0].removeClass("opacity-half")
        $(".contact-us-form-bottom-right-input")[1].removeClass("opacity-half")
        $(".contact-us-form-bottom-right-input")[2].removeClass("opacity-half")
        $("#contact-us-form-bottom-right-submit-button")[2].removeClass("opacity-half")
            });
    }

    
} 


function addEventListeners() {

    $(".contact-us-form-bottom-left-question").on('click', function (e) {
        e.currentTarget.firstElementChild.firstElementChild.classList.toggle("fa-chevron-right")
        e.currentTarget.firstElementChild.firstElementChild.classList.toggle("fa-chevron-down")
        e.currentTarget.lastElementChild.classList.toggle("height-auto")
    })

    $("#contact-us-form-bottom-right-submit-button").on('click', sendEmail)

}




