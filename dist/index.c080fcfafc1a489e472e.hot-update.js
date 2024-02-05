"use strict";
self["webpackHotUpdatefreedom_church"]("index",{

/***/ "./src/components/navbar/navbarpage.js":
/*!*********************************************!*\
  !*** ./src/components/navbar/navbarpage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navbarpage)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");
/* harmony import */ var _pages_giving_givingpage_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../pages/giving/givingpage.html */ "./src/pages/giving/givingpage.html");
/* harmony import */ var _pages_giving_givingpage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/giving/givingpage.js */ "./src/pages/giving/givingpage.js");
/* harmony import */ var _pages_homepage_homepage_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../pages/homepage/homepage.html */ "./src/pages/homepage/homepage.html");
/* harmony import */ var _pages_homepage_homepage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/homepage/homepage.js */ "./src/pages/homepage/homepage.js");
/* harmony import */ var _images_ChurchLogo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../images/ChurchLogo.svg */ "./images/ChurchLogo.svg");











function navbarpage() {

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-left-logo").attr("src", `${_images_ChurchLogo_svg__WEBPACK_IMPORTED_MODULE_6__}`);

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-menu-icon").css("color", "black")

  addEventListeners()
  updateChurchInfo()



  // document.getElementById("contact-us-form").scrollIntoView();
}


function updateChurchInfo() {
  if (js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("church")) {
    // menu bar
    if (screen.width > 768) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-button-text").html(`Freedom Church - ${js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("church").charAt(0).toUpperCase() + js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("church").slice(1)}`)
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-button-text").html(`Freedom - ${js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("church").charAt(0).toUpperCase() + js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("church").slice(1)}`)
    }
    //footer city name
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-middle-left-title").html(`${js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("church").toUpperCase()}`)
    if (js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("church") === "lima") {
      // footer map and address
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-middle-left-body").html(`<a target="_blank" href="https://www.google.com/maps/place/2244+Baton+Rouge,+Lima,+OH+45805/@40.7693232,-84.149015,17.72z/data=!4m6!3m5!1s0x883ef3aa9595c733:0x92758e42c9b6302c!8m2!3d40.7689502!4d-84.144874!16s%2Fg%2F11c4gn581w?coh=178572&entry=tt&shorturl=1" >2244 Baton Rouge Ave Lima OH 45805</a>`)
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-map").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.0293026267982!2d-84.14901495656605!3d40.76932319727805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883ef3aa9595c733%3A0x92758e42c9b6302c!2s2244%20Baton%20Rouge%2C%20Lima%2C%20OH%2045805!5e0!3m2!1sen!2sus!4v1682207210127!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
      // footer icons
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-facebook-icon").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-phone-icon").off().on('click', function () {
        screen.width > 768 ? alert("Please call (419) 523-2279") : window.open('tel:+4195232279', '_blank');
      })

      //footer give
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-bottom-give").off().on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#under-construction-body").removeClass("display-none")
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#under-construction-body").css("top", `${window.scrollY}px`);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").addClass("overflow-hidden")
      })
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-bottom-give").html(`<a id="homepage-footer-bottom-give" >Give to ${js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("church").charAt(0).toUpperCase() + js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("church").slice(1)} Online</a>`)

      //footer watch live on facebook
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-bottom-text-watch-live").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })

      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-bottom-text-watch-past").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })

      // menu watch live on facebook
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover-body-watch-live").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })

      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover-body-past-sermons").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })


      //give page
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#giving-intro-info-container-give-online").off().on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#under-construction-body").removeClass("display-none")
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#under-construction-body").css("top", `${window.scrollY}px`);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").addClass("overflow-hidden")
      })

      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#giving-ways-list-give-now").off().on('click', function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()("#under-construction-body").removeClass("display-none")
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#under-construction-body").css("top", `${window.scrollY}px`);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").addClass("overflow-hidden")
      })

      //give page address
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#giving-ways-list-address").html("Freedom Church - Lima <br>2244 Baton Rouge Ave.<br>Lima, OH 45805")

      //homepage watch online
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-get-to-know-us-right-sub-watch-online").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })

    } else {
      // footer map and address
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-middle-left-body").html(`<a target="_blank" href="https://www.google.com/maps/place/Freedom+Church/@41.0195262,-84.0467237,20z/data=!4m6!3m5!1s0x883e9b89885c0313:0x7eca22fde8516c29!8m2!3d41.019438!4d-84.046609!16s%2Fg%2F11gnpzdwg0" >133 N Court St, 3rd Floor, 307C, Ottawa, Ohio 45875</a>`)
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-map").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d376.2827351102381!2d-84.0467237!3d41.0195262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883e9b89885c0313%3A0x7eca22fde8516c29!2sFreedom%20Church!5e0!3m2!1sen!2sus!4v1681922537015!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
      // footer icons
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-facebook-icon").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-phone-icon").off().on('click', function () {
        screen.width > 768 ? alert("Please call (419) 225-6595") : window.open('tel:+4192256595', '_blank');
      })


      //footer give
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-bottom-give").off()
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-bottom-give").html(`<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KXYPYYU2NLTBU&source=url" id="homepage-footer-bottom-give" target="_blank" >Give to ${js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("church").charAt(0).toUpperCase() + js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("church").slice(1)} Online</a>`)


      //footer watch live on facebook
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-bottom-text-watch-live").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })

      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-footer-bottom-text-watch-past").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })

      // menu watch live on facebook
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover-body-watch-live").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })

      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover-body-past-sermons").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })

      //give page
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#giving-intro-info-container-give-online").off().on('click', function () {
        window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KXYPYYU2NLTBU&source=url', '_blank');
      })

      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#giving-ways-list-give-now").off().on('click', function () {
        window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KXYPYYU2NLTBU&source=url', '_blank');

      })

      //give page address
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#giving-ways-list-address").html("Freedom Church - Ottawa <br>133 N Court St.<br>Ottawa, OH 45875")


      //homepage watch online
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-get-to-know-us-right-sub-watch-online").off().on('click', function () {
        window.open('https://www.facebook.com/groups/642064716223770', '_blank');
      })
    }

  }
}



function addEventListeners() {

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-location").on('click', function () {
    document.getElementById("homepage-map").scrollIntoView({ behavior: 'smooth' })
  })

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-left-logo").on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").load(`${_pages_homepage_homepage_html__WEBPACK_IMPORTED_MODULE_4__["default"]}`, function () {
      ;(0,_pages_homepage_homepage_js__WEBPACK_IMPORTED_MODULE_5__["default"])()
    });
  })

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-menu").on('click', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").css("top", `${window.scrollY}px`);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").addClass("position-static")
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar").addClass("display-none")
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").removeClass("display-none")

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover-body").removeClass("display-none")

    setTimeout(() => {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-menu-cover").addClass("opacity-one")
    }, 1)
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").addClass("overflow-hidden")
  })

  if (screen.width > 768) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-toggle-button").on('mouseenter', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-toggle").removeClass("display-none")
  }).on('mouseleave', function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-toggle").addClass("display-none")
  });
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-toggle-button").on('mouseleave', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-toggle").addClass("display-none")
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-toggle-button").on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-toggle").removeClass("display-none")
    })
  }


  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-toggle-lima").on('click', function (e) {
    e.stopPropagation();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-toggle").addClass("display-none")
    if (screen.width > 768) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-button-text").html("Freedom Church - Lima")
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-button-text").html("Freedom - Lima")
    }

    js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("church", "lima", { expires: 365 })
    updateChurchInfo()
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-toggle").addClass("display-none")
  })

  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-toggle-ottawa").on('click', function (e) {
    e.stopPropagation();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-toggle").addClass("display-none")
    if (screen.width > 768) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-button-text").html("Freedom Church - Ottawa")
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-church-button-text").html("Freedom - Ottawa")
    }

    js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].set("church", "ottawa", { expires: 365 })
    updateChurchInfo()

  })


  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#homepage-navbar-magnifying-glass").on('click', function(){
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#under-construction-body").removeClass("display-none")
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#under-construction-body").css("top", `${window.scrollY}px`);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").addClass("overflow-hidden")
  })

}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fb79e4cf25a1d67ee4fe")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzA4MGZjZmFmYzFhNDg5ZTQ3MmUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0I7QUFDVTs7QUFFMkI7QUFDRjs7QUFFRTtBQUNGOztBQUVFOztBQUU1Qzs7QUFFZixFQUFFLDZDQUFDLDhDQUE4QyxtREFBWSxDQUFDOztBQUU5RCxFQUFFLDZDQUFDOztBQUVIO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7QUFHQTtBQUNBLE1BQU0saURBQU87QUFDYjtBQUNBO0FBQ0EsTUFBTSw2Q0FBQyxpRUFBaUUsaURBQU8seUNBQXlDLGlEQUFPLHdCQUF3QjtBQUN2SixNQUFNO0FBQ04sTUFBTSw2Q0FBQywwREFBMEQsaURBQU8seUNBQXlDLGlEQUFPLHdCQUF3QjtBQUNoSjtBQUNBO0FBQ0EsSUFBSSw2Q0FBQywrQ0FBK0MsaURBQU8sNkJBQTZCO0FBQ3hGLFFBQVEsaURBQU87QUFDZjtBQUNBLE1BQU0sNkNBQUM7QUFDUCxNQUFNLDZDQUFDLG1XQUFtVztBQUMxVztBQUNBLE1BQU0sNkNBQUM7QUFDUDtBQUNBLE9BQU87QUFDUCxNQUFNLDZDQUFDO0FBQ1A7QUFDQSxPQUFPOztBQUVQO0FBQ0EsTUFBTSw2Q0FBQztBQUNQLFFBQVEsNkNBQUM7QUFDVCxJQUFJLDZDQUFDLDJDQUEyQyxlQUFlO0FBQy9ELElBQUksNkNBQUM7QUFDTCxPQUFPO0FBQ1AsTUFBTSw2Q0FBQyxzRkFBc0YsaURBQU8seUNBQXlDLGlEQUFPLHlCQUF5Qjs7QUFFN0s7QUFDQSxNQUFNLDZDQUFDO0FBQ1A7QUFDQSxPQUFPOztBQUVQLE1BQU0sNkNBQUM7QUFDUDtBQUNBLE9BQU87O0FBRVA7QUFDQSxNQUFNLDZDQUFDO0FBQ1A7QUFDQSxPQUFPOztBQUVQLE1BQU0sNkNBQUM7QUFDUDtBQUNBLE9BQU87OztBQUdQO0FBQ0EsTUFBTSw2Q0FBQztBQUNQLFFBQVEsNkNBQUM7QUFDVCxJQUFJLDZDQUFDLDJDQUEyQyxlQUFlO0FBQy9ELElBQUksNkNBQUM7QUFDTCxPQUFPOztBQUVQLE1BQU0sNkNBQUM7QUFDUCxRQUFRLDZDQUFDO0FBQ1QsSUFBSSw2Q0FBQywyQ0FBMkMsZUFBZTtBQUMvRCxJQUFJLDZDQUFDO0FBQ0wsT0FBTzs7QUFFUDtBQUNBLE1BQU0sNkNBQUM7O0FBRVA7QUFDQSxNQUFNLDZDQUFDO0FBQ1A7QUFDQSxPQUFPOztBQUVQLE1BQU07QUFDTjtBQUNBLE1BQU0sNkNBQUM7QUFDUCxNQUFNLDZDQUFDLHFTQUFxUztBQUM1UztBQUNBLE1BQU0sNkNBQUM7QUFDUDtBQUNBLE9BQU87QUFDUCxNQUFNLDZDQUFDO0FBQ1A7QUFDQSxPQUFPOzs7QUFHUDtBQUNBLE1BQU0sNkNBQUM7QUFDUCxNQUFNLDZDQUFDLDJNQUEyTSxpREFBTyx5Q0FBeUMsaURBQU8seUJBQXlCOzs7QUFHbFM7QUFDQSxNQUFNLDZDQUFDO0FBQ1A7QUFDQSxPQUFPOztBQUVQLE1BQU0sNkNBQUM7QUFDUDtBQUNBLE9BQU87O0FBRVA7QUFDQSxNQUFNLDZDQUFDO0FBQ1A7QUFDQSxPQUFPOztBQUVQLE1BQU0sNkNBQUM7QUFDUDtBQUNBLE9BQU87O0FBRVA7QUFDQSxNQUFNLDZDQUFDO0FBQ1A7QUFDQSxPQUFPOztBQUVQLE1BQU0sNkNBQUM7QUFDUDs7QUFFQSxPQUFPOztBQUVQO0FBQ0EsTUFBTSw2Q0FBQzs7O0FBR1A7QUFDQSxNQUFNLDZDQUFDO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7OztBQUlBOztBQUVBLEVBQUUsNkNBQUM7QUFDSCw2REFBNkQsb0JBQW9CO0FBQ2pGLEdBQUc7O0FBRUgsRUFBRSw2Q0FBQztBQUNILElBQUksNkNBQUMsaUJBQWlCLHFFQUFRLENBQUM7QUFDL0IsTUFBTSx3RUFBVTtBQUNoQixLQUFLO0FBQ0wsR0FBRzs7QUFFSCxFQUFFLDZDQUFDO0FBQ0gsSUFBSSw2Q0FBQyx1Q0FBdUMsZUFBZTtBQUMzRCxJQUFJLDZDQUFDO0FBQ0wsSUFBSSw2Q0FBQztBQUNMLElBQUksNkNBQUM7O0FBRUwsSUFBSSw2Q0FBQzs7QUFFTDtBQUNBLE1BQU0sNkNBQUM7QUFDUCxLQUFLO0FBQ0wsSUFBSSw2Q0FBQztBQUNMLEdBQUc7O0FBRUg7QUFDQSxJQUFJLDZDQUFDO0FBQ0wsSUFBSSw2Q0FBQztBQUNMLEdBQUc7QUFDSCxJQUFJLDZDQUFDO0FBQ0wsR0FBRztBQUNILElBQUk7QUFDSixJQUFJLDZDQUFDO0FBQ0wsTUFBTSw2Q0FBQztBQUNQLEtBQUs7QUFDTCxJQUFJLDZDQUFDO0FBQ0wsTUFBTSw2Q0FBQztBQUNQLEtBQUs7QUFDTDs7O0FBR0EsRUFBRSw2Q0FBQztBQUNIO0FBQ0EsSUFBSSw2Q0FBQztBQUNMO0FBQ0EsTUFBTSw2Q0FBQztBQUNQLE1BQU07QUFDTixNQUFNLDZDQUFDO0FBQ1A7O0FBRUEsSUFBSSxpREFBTyx5QkFBeUIsY0FBYztBQUNsRDtBQUNBLElBQUksNkNBQUM7QUFDTCxHQUFHOztBQUVILEVBQUUsNkNBQUM7QUFDSDtBQUNBLElBQUksNkNBQUM7QUFDTDtBQUNBLE1BQU0sNkNBQUM7QUFDUCxNQUFNO0FBQ04sTUFBTSw2Q0FBQztBQUNQOztBQUVBLElBQUksaURBQU8sMkJBQTJCLGNBQWM7QUFDcEQ7O0FBRUEsR0FBRzs7O0FBR0gsRUFBRSw2Q0FBQztBQUNILElBQUksNkNBQUM7QUFDTCxJQUFJLDZDQUFDLDJDQUEyQyxlQUFlO0FBQy9ELElBQUksNkNBQUM7QUFDTCxHQUFHOztBQUVIOzs7Ozs7Ozs7VUMxT0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmVlZG9tX2NodXJjaC8uL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXJwYWdlLmpzIiwid2VicGFjazovL2ZyZWVkb21fY2h1cmNoL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG5pbXBvcnQgR2l2ZVBhZ2UgZnJvbSAnLi8uLi8uLi9wYWdlcy9naXZpbmcvZ2l2aW5ncGFnZS5odG1sJ1xuaW1wb3J0IEdpdmVQYWdlSlMgZnJvbSAnLi4vLi4vcGFnZXMvZ2l2aW5nL2dpdmluZ3BhZ2UuanMnXG5cbmltcG9ydCBIb21lUGFnZSBmcm9tICcuLy4uLy4uL3BhZ2VzL2hvbWVwYWdlL2hvbWVwYWdlLmh0bWwnXG5pbXBvcnQgSG9tZVBhZ2VKUyBmcm9tICcuLi8uLi9wYWdlcy9ob21lcGFnZS9ob21lcGFnZS5qcydcblxuaW1wb3J0IE5hdmJhckZDTG9nbyBmcm9tICcuLy4uLy4uLy4uL2ltYWdlcy9DaHVyY2hMb2dvLnN2ZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2YmFycGFnZSgpIHtcblxuICAkKFwiI2hvbWVwYWdlLW5hdmJhci1sZWZ0LWxvZ29cIikuYXR0cihcInNyY1wiLCBgJHtOYXZiYXJGQ0xvZ299YCk7XG5cbiAgJChcIiNob21lcGFnZS1uYXZiYXItbWVudS1pY29uXCIpLmNzcyhcImNvbG9yXCIsIFwiYmxhY2tcIilcblxuICBhZGRFdmVudExpc3RlbmVycygpXG4gIHVwZGF0ZUNodXJjaEluZm8oKVxuXG5cblxuICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3QtdXMtZm9ybVwiKS5zY3JvbGxJbnRvVmlldygpO1xufVxuXG5cbmZ1bmN0aW9uIHVwZGF0ZUNodXJjaEluZm8oKSB7XG4gIGlmIChDb29raWVzLmdldChcImNodXJjaFwiKSkge1xuICAgIC8vIG1lbnUgYmFyXG4gICAgaWYgKHNjcmVlbi53aWR0aCA+IDc2OCkge1xuICAgICAgJChcIiNob21lcGFnZS1uYXZiYXItY2h1cmNoLWJ1dHRvbi10ZXh0XCIpLmh0bWwoYEZyZWVkb20gQ2h1cmNoIC0gJHtDb29raWVzLmdldChcImNodXJjaFwiKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIENvb2tpZXMuZ2V0KFwiY2h1cmNoXCIpLnNsaWNlKDEpfWApXG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyLWNodXJjaC1idXR0b24tdGV4dFwiKS5odG1sKGBGcmVlZG9tIC0gJHtDb29raWVzLmdldChcImNodXJjaFwiKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIENvb2tpZXMuZ2V0KFwiY2h1cmNoXCIpLnNsaWNlKDEpfWApXG4gICAgfVxuICAgIC8vZm9vdGVyIGNpdHkgbmFtZVxuICAgICQoXCIjaG9tZXBhZ2UtZm9vdGVyLW1pZGRsZS1sZWZ0LXRpdGxlXCIpLmh0bWwoYCR7Q29va2llcy5nZXQoXCJjaHVyY2hcIikudG9VcHBlckNhc2UoKX1gKVxuICAgIGlmIChDb29raWVzLmdldChcImNodXJjaFwiKSA9PT0gXCJsaW1hXCIpIHtcbiAgICAgIC8vIGZvb3RlciBtYXAgYW5kIGFkZHJlc3NcbiAgICAgICQoXCIjaG9tZXBhZ2UtZm9vdGVyLW1pZGRsZS1sZWZ0LWJvZHlcIikuaHRtbChgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS8yMjQ0K0JhdG9uK1JvdWdlLCtMaW1hLCtPSCs0NTgwNS9ANDAuNzY5MzIzMiwtODQuMTQ5MDE1LDE3Ljcyei9kYXRhPSE0bTYhM201ITFzMHg4ODNlZjNhYTk1OTVjNzMzOjB4OTI3NThlNDJjOWI2MzAyYyE4bTIhM2Q0MC43Njg5NTAyITRkLTg0LjE0NDg3NCExNnMlMkZnJTJGMTFjNGduNTgxdz9jb2g9MTc4NTcyJmVudHJ5PXR0JnNob3J0dXJsPTFcIiA+MjI0NCBCYXRvbiBSb3VnZSBBdmUgTGltYSBPSCA0NTgwNTwvYT5gKVxuICAgICAgJChcIiNob21lcGFnZS1tYXBcIikuaHRtbChgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxODM2LjAyOTMwMjYyNjc5ODIhMmQtODQuMTQ5MDE0OTU2NTY2MDUhM2Q0MC43NjkzMjMxOTcyNzgwNSEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODgzZWYzYWE5NTk1YzczMyUzQTB4OTI3NThlNDJjOWI2MzAyYyEyczIyNDQlMjBCYXRvbiUyMFJvdWdlJTJDJTIwTGltYSUyQyUyME9IJTIwNDU4MDUhNWUwITNtMiExc2VuITJzdXMhNHYxNjgyMjA3MjEwMTI3ITVtMiExc2VuITJzdXNcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPmApXG4gICAgICAvLyBmb290ZXIgaWNvbnNcbiAgICAgICQoXCIjaG9tZXBhZ2UtZm9vdGVyLWZhY2Vib29rLWljb25cIikub2ZmKCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy82NDIwNjQ3MTYyMjM3NzAnLCAnX2JsYW5rJyk7XG4gICAgICB9KVxuICAgICAgJChcIiNob21lcGFnZS1mb290ZXItcGhvbmUtaWNvblwiKS5vZmYoKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNjcmVlbi53aWR0aCA+IDc2OCA/IGFsZXJ0KFwiUGxlYXNlIGNhbGwgKDQxOSkgNTIzLTIyNzlcIikgOiB3aW5kb3cub3BlbigndGVsOis0MTk1MjMyMjc5JywgJ19ibGFuaycpO1xuICAgICAgfSlcblxuICAgICAgLy9mb290ZXIgZ2l2ZVxuICAgICAgJChcIiNob21lcGFnZS1mb290ZXItYm90dG9tLWdpdmVcIikub2ZmKCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI3VuZGVyLWNvbnN0cnVjdGlvbi1ib2R5XCIpLnJlbW92ZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgJChcIiN1bmRlci1jb25zdHJ1Y3Rpb24tYm9keVwiKS5jc3MoXCJ0b3BcIiwgYCR7d2luZG93LnNjcm9sbFl9cHhgKTtcbiAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcIm92ZXJmbG93LWhpZGRlblwiKVxuICAgICAgfSlcbiAgICAgICQoXCIjaG9tZXBhZ2UtZm9vdGVyLWJvdHRvbS1naXZlXCIpLmh0bWwoYDxhIGlkPVwiaG9tZXBhZ2UtZm9vdGVyLWJvdHRvbS1naXZlXCIgPkdpdmUgdG8gJHtDb29raWVzLmdldChcImNodXJjaFwiKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIENvb2tpZXMuZ2V0KFwiY2h1cmNoXCIpLnNsaWNlKDEpfSBPbmxpbmU8L2E+YClcblxuICAgICAgLy9mb290ZXIgd2F0Y2ggbGl2ZSBvbiBmYWNlYm9va1xuICAgICAgJChcIiNob21lcGFnZS1mb290ZXItYm90dG9tLXRleHQtd2F0Y2gtbGl2ZVwiKS5vZmYoKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3JvdXBzLzY0MjA2NDcxNjIyMzc3MCcsICdfYmxhbmsnKTtcbiAgICAgIH0pXG5cbiAgICAgICQoXCIjaG9tZXBhZ2UtZm9vdGVyLWJvdHRvbS10ZXh0LXdhdGNoLXBhc3RcIikub2ZmKCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy82NDIwNjQ3MTYyMjM3NzAnLCAnX2JsYW5rJyk7XG4gICAgICB9KVxuXG4gICAgICAvLyBtZW51IHdhdGNoIGxpdmUgb24gZmFjZWJvb2tcbiAgICAgICQoXCIjaG9tZXBhZ2UtbWVudS1jb3Zlci1ib2R5LXdhdGNoLWxpdmVcIikub2ZmKCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy82NDIwNjQ3MTYyMjM3NzAnLCAnX2JsYW5rJyk7XG4gICAgICB9KVxuXG4gICAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXItYm9keS1wYXN0LXNlcm1vbnNcIikub2ZmKCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy82NDIwNjQ3MTYyMjM3NzAnLCAnX2JsYW5rJyk7XG4gICAgICB9KVxuXG5cbiAgICAgIC8vZ2l2ZSBwYWdlXG4gICAgICAkKFwiI2dpdmluZy1pbnRyby1pbmZvLWNvbnRhaW5lci1naXZlLW9ubGluZVwiKS5vZmYoKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjdW5kZXItY29uc3RydWN0aW9uLWJvZHlcIikucmVtb3ZlQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICAkKFwiI3VuZGVyLWNvbnN0cnVjdGlvbi1ib2R5XCIpLmNzcyhcInRvcFwiLCBgJHt3aW5kb3cuc2Nyb2xsWX1weGApO1xuICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwib3ZlcmZsb3ctaGlkZGVuXCIpXG4gICAgICB9KVxuXG4gICAgICAkKFwiI2dpdmluZy13YXlzLWxpc3QtZ2l2ZS1ub3dcIikub2ZmKCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI3VuZGVyLWNvbnN0cnVjdGlvbi1ib2R5XCIpLnJlbW92ZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgJChcIiN1bmRlci1jb25zdHJ1Y3Rpb24tYm9keVwiKS5jc3MoXCJ0b3BcIiwgYCR7d2luZG93LnNjcm9sbFl9cHhgKTtcbiAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcIm92ZXJmbG93LWhpZGRlblwiKVxuICAgICAgfSlcblxuICAgICAgLy9naXZlIHBhZ2UgYWRkcmVzc1xuICAgICAgJChcIiNnaXZpbmctd2F5cy1saXN0LWFkZHJlc3NcIikuaHRtbChcIkZyZWVkb20gQ2h1cmNoIC0gTGltYSA8YnI+MjI0NCBCYXRvbiBSb3VnZSBBdmUuPGJyPkxpbWEsIE9IIDQ1ODA1XCIpXG5cbiAgICAgIC8vaG9tZXBhZ2Ugd2F0Y2ggb25saW5lXG4gICAgICAkKFwiI2hvbWVwYWdlLWdldC10by1rbm93LXVzLXJpZ2h0LXN1Yi13YXRjaC1vbmxpbmVcIikub2ZmKCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy82NDIwNjQ3MTYyMjM3NzAnLCAnX2JsYW5rJyk7XG4gICAgICB9KVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZvb3RlciBtYXAgYW5kIGFkZHJlc3NcbiAgICAgICQoXCIjaG9tZXBhZ2UtZm9vdGVyLW1pZGRsZS1sZWZ0LWJvZHlcIikuaHRtbChgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9wbGFjZS9GcmVlZG9tK0NodXJjaC9ANDEuMDE5NTI2MiwtODQuMDQ2NzIzNywyMHovZGF0YT0hNG02ITNtNSExczB4ODgzZTliODk4ODVjMDMxMzoweDdlY2EyMmZkZTg1MTZjMjkhOG0yITNkNDEuMDE5NDM4ITRkLTg0LjA0NjYwOSExNnMlMkZnJTJGMTFnbnB6ZHdnMFwiID4xMzMgTiBDb3VydCBTdCwgM3JkIEZsb29yLCAzMDdDLCBPdHRhd2EsIE9oaW8gNDU4NzU8L2E+YClcbiAgICAgICQoXCIjaG9tZXBhZ2UtbWFwXCIpLmh0bWwoYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE0ITFtOCExbTMhMWQzNzYuMjgyNzM1MTEwMjM4MSEyZC04NC4wNDY3MjM3ITNkNDEuMDE5NTI2MiEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4ODNlOWI4OTg4NWMwMzEzJTNBMHg3ZWNhMjJmZGU4NTE2YzI5ITJzRnJlZWRvbSUyMENodXJjaCE1ZTAhM20yITFzZW4hMnN1cyE0djE2ODE5MjI1MzcwMTUhNW0yITFzZW4hMnN1c1wiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+PC9pZnJhbWU+YClcbiAgICAgIC8vIGZvb3RlciBpY29uc1xuICAgICAgJChcIiNob21lcGFnZS1mb290ZXItZmFjZWJvb2staWNvblwiKS5vZmYoKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3JvdXBzLzY0MjA2NDcxNjIyMzc3MCcsICdfYmxhbmsnKTtcbiAgICAgIH0pXG4gICAgICAkKFwiI2hvbWVwYWdlLWZvb3Rlci1waG9uZS1pY29uXCIpLm9mZigpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2NyZWVuLndpZHRoID4gNzY4ID8gYWxlcnQoXCJQbGVhc2UgY2FsbCAoNDE5KSAyMjUtNjU5NVwiKSA6IHdpbmRvdy5vcGVuKCd0ZWw6KzQxOTIyNTY1OTUnLCAnX2JsYW5rJyk7XG4gICAgICB9KVxuXG5cbiAgICAgIC8vZm9vdGVyIGdpdmVcbiAgICAgICQoXCIjaG9tZXBhZ2UtZm9vdGVyLWJvdHRvbS1naXZlXCIpLm9mZigpXG4gICAgICAkKFwiI2hvbWVwYWdlLWZvb3Rlci1ib3R0b20tZ2l2ZVwiKS5odG1sKGA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGF5cGFsLmNvbS9jZ2ktYmluL3dlYnNjcj9jbWQ9X3MteGNsaWNrJmhvc3RlZF9idXR0b25faWQ9S1hZUFlZVTJOTFRCVSZzb3VyY2U9dXJsXCIgaWQ9XCJob21lcGFnZS1mb290ZXItYm90dG9tLWdpdmVcIiB0YXJnZXQ9XCJfYmxhbmtcIiA+R2l2ZSB0byAke0Nvb2tpZXMuZ2V0KFwiY2h1cmNoXCIpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgQ29va2llcy5nZXQoXCJjaHVyY2hcIikuc2xpY2UoMSl9IE9ubGluZTwvYT5gKVxuXG5cbiAgICAgIC8vZm9vdGVyIHdhdGNoIGxpdmUgb24gZmFjZWJvb2tcbiAgICAgICQoXCIjaG9tZXBhZ2UtZm9vdGVyLWJvdHRvbS10ZXh0LXdhdGNoLWxpdmVcIikub2ZmKCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy82NDIwNjQ3MTYyMjM3NzAnLCAnX2JsYW5rJyk7XG4gICAgICB9KVxuXG4gICAgICAkKFwiI2hvbWVwYWdlLWZvb3Rlci1ib3R0b20tdGV4dC13YXRjaC1wYXN0XCIpLm9mZigpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvNjQyMDY0NzE2MjIzNzcwJywgJ19ibGFuaycpO1xuICAgICAgfSlcblxuICAgICAgLy8gbWVudSB3YXRjaCBsaXZlIG9uIGZhY2Vib29rXG4gICAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXItYm9keS13YXRjaC1saXZlXCIpLm9mZigpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvNjQyMDY0NzE2MjIzNzcwJywgJ19ibGFuaycpO1xuICAgICAgfSlcblxuICAgICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyLWJvZHktcGFzdC1zZXJtb25zXCIpLm9mZigpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvNjQyMDY0NzE2MjIzNzcwJywgJ19ibGFuaycpO1xuICAgICAgfSlcblxuICAgICAgLy9naXZlIHBhZ2VcbiAgICAgICQoXCIjZ2l2aW5nLWludHJvLWluZm8tY29udGFpbmVyLWdpdmUtb25saW5lXCIpLm9mZigpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LnBheXBhbC5jb20vY2dpLWJpbi93ZWJzY3I/Y21kPV9zLXhjbGljayZob3N0ZWRfYnV0dG9uX2lkPUtYWVBZWVUyTkxUQlUmc291cmNlPXVybCcsICdfYmxhbmsnKTtcbiAgICAgIH0pXG5cbiAgICAgICQoXCIjZ2l2aW5nLXdheXMtbGlzdC1naXZlLW5vd1wiKS5vZmYoKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL3d3dy5wYXlwYWwuY29tL2NnaS1iaW4vd2Vic2NyP2NtZD1fcy14Y2xpY2smaG9zdGVkX2J1dHRvbl9pZD1LWFlQWVlVMk5MVEJVJnNvdXJjZT11cmwnLCAnX2JsYW5rJyk7XG5cbiAgICAgIH0pXG5cbiAgICAgIC8vZ2l2ZSBwYWdlIGFkZHJlc3NcbiAgICAgICQoXCIjZ2l2aW5nLXdheXMtbGlzdC1hZGRyZXNzXCIpLmh0bWwoXCJGcmVlZG9tIENodXJjaCAtIE90dGF3YSA8YnI+MTMzIE4gQ291cnQgU3QuPGJyPk90dGF3YSwgT0ggNDU4NzVcIilcblxuXG4gICAgICAvL2hvbWVwYWdlIHdhdGNoIG9ubGluZVxuICAgICAgJChcIiNob21lcGFnZS1nZXQtdG8ta25vdy11cy1yaWdodC1zdWItd2F0Y2gtb25saW5lXCIpLm9mZigpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvNjQyMDY0NzE2MjIzNzcwJywgJ19ibGFuaycpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgfVxufVxuXG5cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgJChcIiNob21lcGFnZS1uYXZiYXItbG9jYXRpb25cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZXBhZ2UtbWFwXCIpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pXG4gIH0pXG5cbiAgJChcIiNob21lcGFnZS1uYXZiYXItbGVmdC1sb2dvXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiYm9keVwiKS5sb2FkKGAke0hvbWVQYWdlfWAsIGZ1bmN0aW9uICgpIHtcbiAgICAgIEhvbWVQYWdlSlMoKVxuICAgIH0pO1xuICB9KVxuXG4gICQoXCIjaG9tZXBhZ2UtbmF2YmFyLW1lbnVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQoXCIjaG9tZXBhZ2UtbWVudS1jb3ZlclwiKS5jc3MoXCJ0b3BcIiwgYCR7d2luZG93LnNjcm9sbFl9cHhgKTtcbiAgICAkKFwiI2hvbWVwYWdlLW5hdmJhclwiKS5hZGRDbGFzcyhcInBvc2l0aW9uLXN0YXRpY1wiKVxuICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyXCIpLmFkZENsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgJChcIiNob21lcGFnZS1tZW51LWNvdmVyXCIpLnJlbW92ZUNsYXNzKFwiZGlzcGxheS1ub25lXCIpXG5cbiAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXItYm9keVwiKS5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAkKFwiI2hvbWVwYWdlLW1lbnUtY292ZXJcIikuYWRkQ2xhc3MoXCJvcGFjaXR5LW9uZVwiKVxuICAgIH0sIDEpXG4gICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJvdmVyZmxvdy1oaWRkZW5cIilcbiAgfSlcblxuICBpZiAoc2NyZWVuLndpZHRoID4gNzY4KSB7XG4gICAgJChcIiNob21lcGFnZS1uYXZiYXItY2h1cmNoLXRvZ2dsZS1idXR0b25cIikub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgJChcIiNob21lcGFnZS1uYXZiYXItY2h1cmNoLXRvZ2dsZVwiKS5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICB9KS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiI2hvbWVwYWdlLW5hdmJhci1jaHVyY2gtdG9nZ2xlXCIpLmFkZENsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gIH0pO1xuICB9IGVsc2Uge1xuICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyLWNodXJjaC10b2dnbGUtYnV0dG9uXCIpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgJChcIiNob21lcGFnZS1uYXZiYXItY2h1cmNoLXRvZ2dsZVwiKS5hZGRDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICAgIH0pO1xuICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyLWNodXJjaC10b2dnbGUtYnV0dG9uXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyLWNodXJjaC10b2dnbGVcIikucmVtb3ZlQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICB9KVxuICB9XG5cblxuICAkKFwiI2hvbWVwYWdlLW5hdmJhci1jaHVyY2gtdG9nZ2xlLWxpbWFcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICQoXCIjaG9tZXBhZ2UtbmF2YmFyLWNodXJjaC10b2dnbGVcIikuYWRkQ2xhc3MoXCJkaXNwbGF5LW5vbmVcIilcbiAgICBpZiAoc2NyZWVuLndpZHRoID4gNzY4KSB7XG4gICAgICAkKFwiI2hvbWVwYWdlLW5hdmJhci1jaHVyY2gtYnV0dG9uLXRleHRcIikuaHRtbChcIkZyZWVkb20gQ2h1cmNoIC0gTGltYVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiI2hvbWVwYWdlLW5hdmJhci1jaHVyY2gtYnV0dG9uLXRleHRcIikuaHRtbChcIkZyZWVkb20gLSBMaW1hXCIpXG4gICAgfVxuXG4gICAgQ29va2llcy5zZXQoXCJjaHVyY2hcIiwgXCJsaW1hXCIsIHsgZXhwaXJlczogMzY1IH0pXG4gICAgdXBkYXRlQ2h1cmNoSW5mbygpXG4gICAgJChcIiNob21lcGFnZS1uYXZiYXItY2h1cmNoLXRvZ2dsZVwiKS5hZGRDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICB9KVxuXG4gICQoXCIjaG9tZXBhZ2UtbmF2YmFyLWNodXJjaC10b2dnbGUtb3R0YXdhXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAkKFwiI2hvbWVwYWdlLW5hdmJhci1jaHVyY2gtdG9nZ2xlXCIpLmFkZENsYXNzKFwiZGlzcGxheS1ub25lXCIpXG4gICAgaWYgKHNjcmVlbi53aWR0aCA+IDc2OCkge1xuICAgICAgJChcIiNob21lcGFnZS1uYXZiYXItY2h1cmNoLWJ1dHRvbi10ZXh0XCIpLmh0bWwoXCJGcmVlZG9tIENodXJjaCAtIE90dGF3YVwiKVxuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiI2hvbWVwYWdlLW5hdmJhci1jaHVyY2gtYnV0dG9uLXRleHRcIikuaHRtbChcIkZyZWVkb20gLSBPdHRhd2FcIilcbiAgICB9XG5cbiAgICBDb29raWVzLnNldChcImNodXJjaFwiLCBcIm90dGF3YVwiLCB7IGV4cGlyZXM6IDM2NSB9KVxuICAgIHVwZGF0ZUNodXJjaEluZm8oKVxuXG4gIH0pXG5cblxuICAkKFwiI2hvbWVwYWdlLW5hdmJhci1tYWduaWZ5aW5nLWdsYXNzXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgJChcIiN1bmRlci1jb25zdHJ1Y3Rpb24tYm9keVwiKS5yZW1vdmVDbGFzcyhcImRpc3BsYXktbm9uZVwiKVxuICAgICQoXCIjdW5kZXItY29uc3RydWN0aW9uLWJvZHlcIikuY3NzKFwidG9wXCIsIGAke3dpbmRvdy5zY3JvbGxZfXB4YCk7XG4gICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJvdmVyZmxvdy1oaWRkZW5cIilcbiAgfSlcblxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmI3OWU0Y2YyNWExZDY3ZWU0ZmVcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=