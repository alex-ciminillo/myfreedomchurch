import $ from 'jquery'
import Cookies from 'js-cookie';

import GivePage from './../../pages/giving/givingpage.html'
import GivePageJS from '../../pages/giving/givingpage.js'

import HomePage from './../../pages/homepage/homepage.html'
import HomePageJS from '../../pages/homepage/homepage.js'

import NavbarFCLogo from './../../../images/ChurchLogo.svg'

export default function navbarpage() {

  $("#homepage-navbar-left-logo").attr("src", `${NavbarFCLogo}`);

  $("#homepage-navbar-menu-icon").css("color", "black")

  addEventListeners()
  updateChurchInfo()



  // document.getElementById("contact-us-form").scrollIntoView();
}


function updateChurchInfo() {
  if (Cookies.get("church")) {
    // menu bar
    if (screen.width > 768) {
      $("#homepage-navbar-church-button-text").html(`Freedom Church - ${Cookies.get("church").charAt(0).toUpperCase() + Cookies.get("church").slice(1)}`)
    } else {
      $("#homepage-navbar-church-button-text").html(`Freedom - ${Cookies.get("church").charAt(0).toUpperCase() + Cookies.get("church").slice(1)}`)
    }
    //footer city name
    $("#homepage-footer-middle-left-title").html(`${Cookies.get("church").toUpperCase()}`)
    if (Cookies.get("church") === "lima") {
      // footer map and address
      $("#homepage-footer-middle-left-body").html(`<a target="_blank" href="https://www.google.com/maps/place/2244+Baton+Rouge,+Lima,+OH+45805/@40.7693232,-84.149015,17.72z/data=!4m6!3m5!1s0x883ef3aa9595c733:0x92758e42c9b6302c!8m2!3d40.7689502!4d-84.144874!16s%2Fg%2F11c4gn581w?coh=178572&entry=tt&shorturl=1" >2244 Baton Rouge Ave Lima OH 45805</a>`)
      $("#homepage-map").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.0293026267982!2d-84.14901495656605!3d40.76932319727805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883ef3aa9595c733%3A0x92758e42c9b6302c!2s2244%20Baton%20Rouge%2C%20Lima%2C%20OH%2045805!5e0!3m2!1sen!2sus!4v1682207210127!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
      // footer icons
      $("#homepage-footer-facebook-icon").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })
      $("#homepage-footer-phone-icon").off().on('click', function () {
        screen.width > 768 ? alert("Please call (419) 523-2279") : window.open('tel:+4195232279', '_blank');
      })

      //footer give
      $("#homepage-footer-bottom-give").off().on('click', function () {
        $("#under-construction-body").removeClass("display-none")
    $("#under-construction-body").css("top", `${window.scrollY}px`);
    $("body").addClass("overflow-hidden")
      })
      $("#homepage-footer-bottom-give").html(`<a id="homepage-footer-bottom-give" >Give to ${Cookies.get("church").charAt(0).toUpperCase() + Cookies.get("church").slice(1)} Online</a>`)

      //footer watch live on facebook
      $("#homepage-footer-bottom-text-watch-live").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })

      $("#homepage-footer-bottom-text-watch-past").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })

      // menu watch live on facebook
      $("#homepage-menu-cover-body-watch-live").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })

      $("#homepage-menu-cover-body-past-sermons").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })


      //give page
      $("#giving-intro-info-container-give-online").off().on('click', function () {
        $("#under-construction-body").removeClass("display-none")
    $("#under-construction-body").css("top", `${window.scrollY}px`);
    $("body").addClass("overflow-hidden")
      })

      $("#giving-ways-list-give-now").off().on('click', function () {
        $("#under-construction-body").removeClass("display-none")
    $("#under-construction-body").css("top", `${window.scrollY}px`);
    $("body").addClass("overflow-hidden")
      })

      //give page address
      $("#giving-ways-list-address").html("Freedom Church - Lima <br>2244 Baton Rouge Ave.<br>Lima, OH 45805")

      //homepage watch online
      $("#homepage-get-to-know-us-right-sub-watch-online").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })

    } else {
      // footer map and address
      $("#homepage-footer-middle-left-body").html(`<a target="_blank" href="https://www.google.com/maps/place/Freedom+Church/@41.0195262,-84.0467237,20z/data=!4m6!3m5!1s0x883e9b89885c0313:0x7eca22fde8516c29!8m2!3d41.019438!4d-84.046609!16s%2Fg%2F11gnpzdwg0" >133 N Court St, 3rd Floor, 307C, Ottawa, Ohio 45875</a>`)
      $("#homepage-map").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d376.2827351102381!2d-84.0467237!3d41.0195262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883e9b89885c0313%3A0x7eca22fde8516c29!2sFreedom%20Church!5e0!3m2!1sen!2sus!4v1681922537015!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
      // footer icons
      $("#homepage-footer-facebook-icon").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })
      $("#homepage-footer-phone-icon").off().on('click', function () {
        screen.width > 768 ? alert("Please call (419) 225-6595") : window.open('tel:+4192256595', '_blank');
      })


      //footer give
      $("#homepage-footer-bottom-give").off()
      $("#homepage-footer-bottom-give").html(`<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KXYPYYU2NLTBU&source=url" id="homepage-footer-bottom-give" target="_blank" >Give to ${Cookies.get("church").charAt(0).toUpperCase() + Cookies.get("church").slice(1)} Online</a>`)


      //footer watch live on facebook
      $("#homepage-footer-bottom-text-watch-live").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })

      $("#homepage-footer-bottom-text-watch-past").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })

      // menu watch live on facebook
      $("#homepage-menu-cover-body-watch-live").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })

      $("#homepage-menu-cover-body-past-sermons").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })

      //give page
      $("#giving-intro-info-container-give-online").off().on('click', function () {
        window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KXYPYYU2NLTBU&source=url', '_blank');
      })

      $("#giving-ways-list-give-now").off().on('click', function () {
        window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KXYPYYU2NLTBU&source=url', '_blank');

      })

      //give page address
      $("#giving-ways-list-address").html("Freedom Church - Ottawa <br>133 N Court St.<br>Ottawa, OH 45875")


      //homepage watch online
      $("#homepage-get-to-know-us-right-sub-watch-online").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })
    }

  }
}



function addEventListeners() {

  $("#homepage-navbar-location").on('click', function () {
    document.getElementById("homepage-map").scrollIntoView({ behavior: 'smooth' })
  })

  $("#homepage-navbar-left-logo").on('click', function () {
    $("body").load(`${HomePage}`, function () {
      HomePageJS()
    });
  })

  $("#homepage-navbar-menu").on('click', function () {
    $("#homepage-menu-cover").css("top", `${window.scrollY}px`);
    $("#homepage-navbar").addClass("position-static")
    $("#homepage-navbar").addClass("display-none")
    $("#homepage-menu-cover").removeClass("display-none")

    $("#homepage-menu-cover-body").removeClass("display-none")

    setTimeout(() => {
      $("#homepage-menu-cover").addClass("opacity-one")
    }, 1)
    $("body").addClass("overflow-hidden")
  })

  if (screen.width > 768) {
    $("#homepage-navbar-church-toggle-button").on('mouseenter', function () {
    $("#homepage-navbar-church-toggle").removeClass("display-none")
  }).on('mouseleave', function () {
    $("#homepage-navbar-church-toggle").addClass("display-none")
  });
  } else {
    $("#homepage-navbar-church-toggle-button").on('mouseleave', function () {
      $("#homepage-navbar-church-toggle").addClass("display-none")
    });
    $("#homepage-navbar-church-toggle-button").on('click', function () {
      $("#homepage-navbar-church-toggle").removeClass("display-none")
    })
  }


  $("#homepage-navbar-church-toggle-lima").on('click', function (e) {
    e.stopPropagation();
    $("#homepage-navbar-church-toggle").addClass("display-none")
    if (screen.width > 768) {
      $("#homepage-navbar-church-button-text").html("Freedom Church - Lima")
    } else {
      $("#homepage-navbar-church-button-text").html("Freedom - Lima")
    }

    Cookies.set("church", "lima", { expires: 365 })
    updateChurchInfo()
    $("#homepage-navbar-church-toggle").addClass("display-none")
  })

  $("#homepage-navbar-church-toggle-ottawa").on('click', function (e) {
    e.stopPropagation();
    $("#homepage-navbar-church-toggle").addClass("display-none")
    if (screen.width > 768) {
      $("#homepage-navbar-church-button-text").html("Freedom Church - Ottawa")
    } else {
      $("#homepage-navbar-church-button-text").html("Freedom - Ottawa")
    }

    Cookies.set("church", "ottawa", { expires: 365 })
    updateChurchInfo()

  })


  $("#homepage-navbar-magnifying-glass").on('click', function(){
    $("#under-construction-body").removeClass("display-none")
    $("#under-construction-body").css("top", `${window.scrollY}px`);
    $("body").addClass("overflow-hidden")
  })

}
