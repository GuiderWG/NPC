(function() {
  let preloaderStart = document.getElementById('preloader-container');
  if (preloaderStart) {
    document.body.classList.add('preloader');

    function fadeOutPreloader(el) {
      document.body.classList.remove('preloader');
      preloaderStart.classList.add('animate__animated', 'animate__fadeOutDown');
      setTimeout(() => {
        preloaderStart.classList.add('preloader__container_hide');
      }, 1000);
    }


    window.onload = function() {
      setTimeout(function() {
        fadeOutPreloader(preloaderStart);
      }, 2000);
    };


    const fadeInPreloader = () => {
      document.body.classList.add('preloader');
      preloaderStart.classList.remove('animate__fadeOutDown', 'preloader__container_hide');
      preloaderStart.classList.add('preloader__container_show', 'animate__backInUp');
    };


    document.addEventListener('click', event => {
      let target = event.target,
        // TODO Mobile menu
        link = target.closest('.transition');
      if (link) {
        event.preventDefault();
        fadeInPreloader();
        setTimeout(() => {
          window.location.href = link.href;
        }, 1000);
      }
    });
  }
})();

$(document).ready(() => {

  $('#request').on('show.bs.modal', function (event) {
    let button = $(event.relatedTarget);
    let recipient = button.data('whatever');
    let modal = $(this);
    modal.find('.modal-default__subtitle').text(recipient);
    modal.find('.modal-body [data-service]').val(recipient);
  });

  $('[data-fancybox]').fancybox({
    baseClass: "fancybox-custom-layout",
    infobar: false,
    buttons: ["close", "thumbs", "share"],
    animationEffect: "fade",
    transitionEffect: "fade",
    preventCaptionOverlap: false,
    idleTime: false,
    arrows: false,
    gutter: 0,
    touch: {
      vertical: false
    },
    thumbs : {
      autoStart : true
    },
    share: {
      tpl:
          '<div class="fancybox-share">' +
          "<h1>{{SHARE}}</h1>" +
          "<p>" +
          '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' +
          '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' +
          "<span>Facebook</span>" +
          "</a>" +
          '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' +
          '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' +
          "<span>Twitter</span>" +
          "</a>" +
          '<a class="fancybox-share__button fancybox-share__button--vk" ' +
          'href="https://vk.com/share.php?url={{url}}">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.962 511.962"> <path d="M507.399,370.471c-1.376-2.304-9.888-20.8-50.848-58.816c-42.88-39.808-37.12-33.344,14.528-102.176 c31.456-41.92,44.032-67.52,40.096-78.464c-3.744-10.432-26.88-7.68-26.88-7.68l-76.928,0.448c0,0-5.696-0.768-9.952,1.76 c-4.128,2.496-6.784,8.256-6.784,8.256s-12.192,32.448-28.448,60.032c-34.272,58.208-48,61.28-53.6,57.664 c-13.024-8.416-9.76-33.856-9.76-51.904c0-56.416,8.544-79.936-16.672-86.016c-8.384-2.016-14.528-3.36-35.936-3.584 c-27.456-0.288-50.72,0.096-63.872,6.528c-8.768,4.288-15.52,13.856-11.392,14.4c5.088,0.672,16.608,3.104,22.72,11.424 c7.904,10.72,7.616,34.848,7.616,34.848s4.544,66.4-10.592,74.656c-10.4,5.664-24.64-5.888-55.2-58.72 c-15.648-27.04-27.488-56.96-27.488-56.96s-2.272-5.568-6.336-8.544c-4.928-3.616-11.84-4.768-11.84-4.768l-73.152,0.448 c0,0-10.976,0.32-15.008,5.088c-3.584,4.256-0.288,13.024-0.288,13.024s57.28,133.984,122.112,201.536 c59.488,61.92,127.008,57.856,127.008,57.856h30.592c0,0,9.248-1.024,13.952-6.112c4.352-4.672,4.192-13.44,4.192-13.44 s-0.608-41.056,18.464-47.104c18.784-5.952,42.912,39.68,68.48,57.248c19.328,13.28,34.016,10.368,34.016,10.368l68.384-0.96 C488.583,400.807,524.359,398.599,507.399,370.471z"/> </svg>' +
          "<span>Вконтакте</span>" +
          "</a>" +
          "</p>" +
          '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p>' +
          "</div>"
    },
    mobile: {
      thumbs: {
        autoStart: false,
      },
      buttons: ['thumbs', 'share', 'close'],
      arrows: true,
    },

  });

  let currentServiceBtn = $('.current-service-btn, .partners__btn'),
      currentServiceClose = $('.current-service__close, .menu-services__link'),
      spoilerBtn = $('.spoiler__btn'),
      spoilerPureBtn = $('.spoiler-pure__btn');

  function currentServiceFixedShow() {
    $('.current-service_fixed').addClass('current-service_fixed_show');
  }

  function currentServiceFixedHide() {
    $('.current-service_fixed').removeClass('current-service_fixed_show');
  }

  // default Spoiler
  spoilerBtn.click(function(e) {
    e.preventDefault();
    $(this).prev().slideToggle().toggleClass('spoiler__shift-text_show');
    $(this).addClass('spoiler__btn_hide');
  });

  spoilerPureBtn.click(function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('spoiler-pure_show');
    $(this).next().slideToggle();
  });

  currentServiceBtn.click(function(e) {
    e.preventDefault();
    $('.current-service_fixed').toggleClass('current-service_fixed_show');
  });
  currentServiceClose.click(function() {
    currentServiceFixedHide();
  });

  $('.partners-map__link').click(function(e) {
    e.preventDefault();

    let partnersTop = document.querySelector('.partners');

    partnersTop.scrollIntoView({
      behavior: "smooth",
      block:    "start"
    });

    setTimeout(currentServiceFixedShow, 700);

  });


  // Do something when happened scroll
  $(window).scroll(function() {
    $('.top-menu').removeClass('fixed-top');
    let top = $('.top'),
        generalInformation = $('.general-information'),
        mainPage  = $('.main-page'),
        generalInformationTheme = $('.general-information_theme_pre-footer'),
        currentServiceFixed = $('.current-service_fixed'),
        ThisScrollToTop = $(this).scrollTop();

    if ($(this).scrollTop() > 0) {
      top.addClass('top_responsive');
    } else {
      top.removeClass('top_responsive');
    }

    if ($(window).width() > 992) {
      if (ThisScrollToTop > (generalInformation.outerHeight() + parseInt(mainPage.css('padding-top')))
          && ThisScrollToTop < (mainPage.outerHeight() - generalInformationTheme.outerHeight() * 2)) {
        currentServiceBtn.addClass('current-service-btn_show');
      } else {
        currentServiceBtn.removeClass('current-service-btn_show');
        currentServiceFixed.removeClass('current-service_fixed_show');
      }
    } else {
      currentServiceBtn.addClass('current-service-btn_show');
    }

  }).scroll();
  /*---*/

  /* TOP MENU DROPDOWN 2LVL */
  $('.main-menu__item_dropdown').hover(
    function() {
      $(this)
        .addClass('main-menu__item_dropdown_open')
        .find('.main-menu-level')
        .stop()
        .fadeIn('50');
    },
    function() {
      $(this)
        .removeClass('main-menu__item_dropdown_open')
        .find('.main-menu-level')
        .stop()
        .fadeOut('50');
    },
  );
  /*---*/

  /* Main slick slider */
  let mainSlider = $('.main-slider');
  if (mainSlider) {
    mainSlider
      .on('init', function(event, slick) {
        let sliderNav = `
        <div class="slider-nav main-slider__nav">
          <div class="slider-nav__arrows">
            <button type="button" class="slider-nav__btn slider-nav__btn_prev"></button>
            <button type="button" class="slider-nav__btn slider-nav__btn_next"></button>
          </div>
          <div class="slider-nav__count"></div>
        </div>`;
        if (slick.slideCount > 1) {
          $(sliderNav).appendTo(mainSlider);
        }
      })
      .on('init reInit beforeChange', function(
        event,
        slick,
        currentSlide,
        nextSlide,
      ) {
        let sliderNavCount = $('.main-slider').find('.slider-nav__count');
        sliderNavCount.text((nextSlide ? 1 + nextSlide : 1) + '/' + slick.slideCount);
      })
      .on('click', '.slider-nav__btn_next', function() {
        mainSlider.slick('slickNext');
      })
      .on('click', '.slider-nav__btn_prev', function() {
        mainSlider.slick('slickPrev');
      })
      .slick({
        fade: true,
        arrows: false,
        adaptiveHeight: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
      });
  }
  /* END Main slick slider */

  /* Slider about our case */
  let sliderCase = $('.slider-case');
  if (sliderCase) {
    sliderCase.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: true,
      asNavFor: '.slider-case-thmb',
    });
  }

  let sliderСaseThmb = $('.slider-case-thmb');
  if (sliderСaseThmb) {
    sliderСaseThmb.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-case',
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 568,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  //remove active class from all thumbnail slides
  let sliderCaseThmbActive = $('.slider-case-thmb .slick-slide');
  sliderCaseThmbActive.removeClass('slick-active');

  //set active class to first thumbnail slides
  sliderCaseThmbActive.eq(0).addClass('slick-active');
  /* END Slider about our case */

  /* Slider about our certificates */
  let sliderCertificates = $('.slider-certificates');
  if (sliderCertificates) {
    sliderCertificates.slick({
      slidesToShow: 6,
      infinite: true,
      arrows: false,
      adaptiveHeight: true,
      dots: true,
      slidesToScroll: 6,
      dotsClass: 'slider-dots',
      autoplay: true,
      autoplaySpeed: 8000,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 568,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
      ]
    });
  }
  /* END Slider about our certificates */

  /* Slider about our partners */
  let sliderPartners = $('.slider-partners');
  if (sliderPartners) {
    sliderPartners.slick({
      slidesToShow: 7,
      infinite: true,
      arrows: false,
      adaptiveHeight: true,
      dots: true,
      slidesToScroll: 7,
      dotsClass: 'slider-dots',
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 568,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 2,
          }
        },
      ]
    });
  }
  /* END Slider about our partners */

  /* Slider about our partners */
  let sliderCases = $('.slider-cases'),
    sliderCasesBottom = $('.slider-cases__bottom');
  if (sliderCases) {
    sliderCases
      .on('init', function(event, slick) {
        let sliderNavCases = `
        <div class="slider-nav slider-cases__nav">
          <div class="slider-nav__arrows slider-nav__arrows_cases">
            <button type="button" class="slider-nav__btn slider-nav__btn_prev"></button>
            <button type="button" class="slider-nav__btn slider-nav__btn_next"></button>
          </div>
          <div class="slider-nav__count"></div>
        </div>`;
        $(sliderCasesBottom).appendTo(sliderCases)
        if (slick.slideCount > 1) {
          $(sliderNavCases).prependTo(sliderCasesBottom);
        }

      })
      .on('init reInit beforeChange', function(
        event,
        slick,
        currentSlide,
        nextSlide,
      ) {
        let sliderNavCount = $('.slider-cases').find('.slider-nav__count');
        sliderNavCount.text((nextSlide ? 1 + nextSlide : 1) + '/' + slick.slideCount);
      })
      .on('click', '.slider-nav__arrows_cases > .slider-nav__btn_next', function() {
        sliderCases.slick('slickNext');
      })
      .on('click', '.slider-nav__arrows_cases > .slider-nav__btn_prev', function() {
        sliderCases.slick('slickPrev');
      })
      .slick({
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
    });
  }
  /* END Slider about our partners */

  /* NUMBER INCREMENT-TO-VALUE ANIMATION */
  let itemNumber = document.querySelectorAll('.item-advantage__counter');
  const animateNumber = () => {
    itemNumber.forEach(item => {
      let interval = 20, // ms
        steps = (item.dataset.speed || 1500) / interval, // total steps
        step = (item.dataset.end - item.dataset.start) / steps; // step increment/decrement

      item.textContent = item.dataset.current = item.dataset.start;

      const numUpper = setInterval(() => {
        item.dataset.current = Number(item.dataset.current) + step;
        if (Number(item.dataset.current) >= Number(item.dataset.end)) {
          clearInterval(numUpper);
          item.textContent = parseInt(item.dataset.end);
        } else {
          item.textContent = parseInt(item.dataset.current);
        }
      }, interval);
    });
  };
  animateNumber();

  $('#fullpage').fullpage({
    anchors: ['otdely', 'napravleniya', 'preimushchestva', 'keysy', 'partnery', 'media', 'kontakty'],
    responsiveWidth: 992,
    responsiveHeight: 920,
    verticalCentered: false,
    css3: true,
    onLeave: function(index, nextIndex, direction){
      //after leaving section 2
      if(index === 2 && direction ==='down'){
        animateNumber();
      }
    }
  });

  /* Mobile menu */
  let menuLink = $('.mobile-menu-btn');
  $('#main-nav').hcOffcanvasNav({
    width: '75%',
    disableAt: 992,
    customToggle: menuLink,
    labelClose: '<img src="../images/logo.svg" alt="" class="logo__img logo__img_mobile img-fluid">',
    labelBack: 'Назад',
  });
  /* END Mobile menu */
});

document.addEventListener('DOMContentLoaded', () => {

  /*YANDEX MAP*/
  let ifmap = document.getElementById('map');
  if (ifmap != null) {
    function init (ymaps) {
      let myMap = new ymaps.Map('map', {
            center: [53.19542104198738,50.26114691796877],
            controls: [],
            zoom: 16,
            behaviors: ['default', 'scrollZoom']
          }),
          myPlacemark = new ymaps.Placemark([53.19542104198738,50.26114691796877], {
            iconCaption: 'НПЦ "Самара"',
            balloonContent: [
              // '<img style="width:100px;float:left;margin:20px 20px 20px 0;" alt="" src="../images/logo.png">' +
              '<address>',
              '<strong>Научно-производственный центр "Самара"</strong>',
              '<br/>',
              'Адрес: г. Самара Гаражный проезд 3-Е',
              '</address>'
            ].join('')
          }, {
            // Опции.
            // Необходимо указать данный тип макета.
            //iconLayout: 'default#image',
            // Своё изображение иконки метки.
            //iconImageHref: '../images/location-pin.svg',
            // Размеры метки.
            //iconImageSize: [20, 26],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            //iconImageOffset: [-2, -22]
          }),

          myCollection = new ymaps.GeoObjectCollection();

      myCollection
          .add(myPlacemark);

      let myBalloonLayout = ymaps.templateLayoutFactory.createClass(

          '<p><strong>$[properties.name]</strong></p>' +
          '<p><strong>Адрес:</strong> $[properties.address]</p>'
      );

      ymaps.layout.storage.add('my#xpertlayout', myBalloonLayout);

      myCollection.options.set({
        balloonContentBodyLayout:'my#xpertlayout',
        balloonMaxWidth: 500
      });

      myMap.geoObjects.add(myCollection);

    }
    ymaps.ready(init);
  }
  /*---*/

  /* Map popup */
  (function() {
    let mapCities = document.querySelector('.map-cities'),
      mapCitiesBtn = document.querySelectorAll('.map-cities__btn'),
      mapCitiesPopup = document.querySelectorAll('.popup-cities');
      //mapCitiesClose = document.querySelector('.popup-cities__close');

    if (mapCities) {
      mapCities.addEventListener('click', function (e) {
        let target = e.target,
          mapCitiesBtnClosest = target.closest('.map-cities__btn');
        if (mapCitiesBtnClosest) {
          mapCitiesBtn.forEach(item => {
            item.classList.remove('map-cities__btn_active');
          });

          mapCitiesPopup.forEach(item => {
            if (mapCitiesBtnClosest.dataset.target === item.id) {
              item.classList.add('popup-cities_active', 'animate__animated', 'animate__bounceInRight');
              item.classList.remove('animate__fadeOutRightBig');
              mapCitiesBtnClosest.classList.add('map-cities__btn_active');
            } else {
              item.classList.add('animate__animated', 'animate__fadeOutRightBig');
              item.classList.remove('animate__bounceInRight');
              setTimeout(() => {
                item.classList.remove('popup-cities_active');
              }, 100);
            }
          });
        }

        let mapCitiesClose = target.closest('.popup-cities__close');
        if (mapCitiesClose) {
          mapCitiesPopup.forEach(item => {
            item.classList.add('animate__animated', 'animate__fadeOutRightBig');
            item.classList.remove('animate__bounceInRight');
          });
        }

      });
    }
  })();
  /* END Map popup */

  /* Parallax.js */
  let scene = document.querySelectorAll('.scene-parallax');
  scene.forEach(item => {
    let parallaxInstance = new Parallax(item, {
      clipRelativeInput: true,
      pointerEvents: true,
    });

    if (innerWidth <= 992) {
      parallaxInstance.destroy();
    }
  });
  /* END Parallax.js */

  // customTabs
  (function() {

    let tab = document.querySelectorAll('.nj-tabs__title'),
      groupTabs = document.querySelectorAll('.nj-tabs__group-tabs'),
      tabInfo = document.querySelectorAll('.nj-tabs__info');

      function showTabInfo(item) {
        tabInfo.forEach((currentTab) => {
          let dataAnim = currentTab.dataset.animation;
          currentTab.classList.remove('nj-tabs__info_show', 'animate__animated', dataAnim);
        });

        tabInfo.forEach(() => {
          let dataAnim = tabInfo[item].dataset.animation;
          tabInfo[item].classList.add('nj-tabs__info_show', 'animate__animated', dataAnim);
        });
      }

      groupTabs.forEach((group) => {
        group.addEventListener('click', function(e) {
          e.preventDefault();
          let target = e.target,
              titleTab = target.closest('.nj-tabs__title');

          let nodeObj = document.querySelector('.nj-tabs__group');

          if (innerWidth <= 991) {
            nodeObj.scrollIntoView({
              behavior: "smooth",
              block:    "nearest"
            });
          }

          if (titleTab) {
            tab.forEach((item, idx) => {

              if (titleTab === tab[idx]) {
                tab.forEach(currentTab => currentTab
                    .classList.remove('nj-tabs__title_active'));

                tab[idx]
                    .classList.add('nj-tabs__title_active');
                showTabInfo(idx);
              }
            });


          }
        });
      });

  })();
  /* END customTabs */

  /* Dynamic Canvas */
  (function() {
    let isCanvas = document.getElementById('canvas');
    if (isCanvas) {
      let resizeReset = function() {
        w = canvasBody.width = window.innerWidth;
        h = canvasBody.height = window.innerHeight;

        if (innerWidth <= 992) {
          opts.particleAmount = 20;
          opts.linkRadius = 100;
        }
        if (innerWidth <= 576) {
          opts.particleAmount = 10;
          opts.linkRadius = 100;
        }
      };

      const opts = {
        particleColor: 'rgb(200,200,200)',
        lineColor: 'rgb(200,200,200)',
        particleAmount: 30,
        defaultSpeed: 1,
        variantSpeed: 1,
        defaultRadius: 2,
        variantRadius: 2,
        linkRadius: 200,
      };

      window.addEventListener('resize', function() {
        deBouncer();
      });

      let deBouncer = function() {
        clearTimeout(tid);
        tid = setTimeout(function() {
          resizeReset();
        }, delay);
      };

      let checkDistance = function(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      };

      let linkPoints = function(point1, hubs) {
        for (let i = 0; i < hubs.length; i++) {
          let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
          let opacity = 1 - distance / opts.linkRadius;
          if (opacity > 0) {
            drawArea.lineWidth = 0.5;
            drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
            drawArea.beginPath();
            drawArea.moveTo(point1.x, point1.y);
            drawArea.lineTo(hubs[i].x, hubs[i].y);
            drawArea.closePath();
            drawArea.stroke();
          }
        }
      };

      Particle = function(xPos, yPos) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
        this.directionAngle = Math.floor(Math.random() * 360);
        this.color = opts.particleColor;
        this.radius = opts.defaultRadius + Math.random() * opts.variantRadius;
        this.vector = {
          x: Math.cos(this.directionAngle) * this.speed,
          y: Math.sin(this.directionAngle) * this.speed,
        };
        this.update = function() {
          this.border();
          this.x += this.vector.x;
          this.y += this.vector.y;
        };
        this.border = function() {
          if (this.x >= w || this.x <= 0) {
            this.vector.x *= -1;
          }
          if (this.y >= h || this.y <= 0) {
            this.vector.y *= -1;
          }
          if (this.x > w) this.x = w;
          if (this.y > h) this.y = h;
          if (this.x < 0) this.x = 0;
          if (this.y < 0) this.y = 0;
        };
        this.draw = function() {
          drawArea.beginPath();
          drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          drawArea.closePath();
          drawArea.fillStyle = this.color;
          drawArea.fill();
        };
      };

      function setup() {
        particles = [];
        resizeReset();
        for (let i = 0; i < opts.particleAmount; i++) {
          particles.push(new Particle());
        }
        window.requestAnimationFrame(loop);
      }

      function loop() {
        window.requestAnimationFrame(loop);
        drawArea.clearRect(0, 0, w, h);
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();
        }
        for (let i = 0; i < particles.length; i++) {
          linkPoints(particles[i], particles);
        }
      }

      const canvasBody = document.getElementById('canvas'),
        drawArea = canvasBody.getContext('2d');
      let delay = 200, tid,
        rgb = opts.lineColor.match(/\d+/g);
      resizeReset();
      setup();
    }

  })();
  /* END Dynamic Canvas */
});

