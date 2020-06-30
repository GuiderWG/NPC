(function() {
  let preloaderStart = document.getElementById('preloader-container');
  if (preloaderStart) {
    document.body.classList.add('preloader');

    function fadeOutPreloader(el) {
      document.body.classList.remove('preloader');
      preloaderStart.classList.add('preloader__container_hide', 'animate__animated', 'animate__fadeOutDown');
    }

    // Показываем Preloader еще некоторое время после загрузки страницы
    window.onload = function() {
      setTimeout(function() {
        fadeOutPreloader(preloaderStart);
      }, 2000);
    };

    //Показываем Preloader перед переходом на страницу
    const fadeInPreloader = () => {
      document.body.classList.add('preloader');
      preloaderStart.classList.remove('animate__fadeOutDown');
      preloaderStart.classList.add('preloader__container_show', 'animate__backInUp');
    };

    // Находим ссылки с классом, осуществляем вызов функции и переходим на страницу через определенное время
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

  /* OWL APPEND TO */
  $(window).resize(function () {
    let top = $('.top');
    if($(this).width() < 992 || $(this).height() < 920){
      top.addClass('top_responsive');
    } else {
      top.removeClass('top_responsive');
    }
  }).trigger('resize');
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
      });
  }
  /* END Main slick slider */

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
      //autoplay: true,
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
    anchors: ['1Page', '2Page', '3Page', '4page', '5page', '6page'],
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

  /*TODO Удалить на проде*/
  // const imgReplace = () => {
  //   let mainSliderTextPicture = $('.main-slider__text-picture').find('.main-slider__prod-img');
  //   mainSliderTextPicture.each((item, val) => {
  //     [val.src, val.dataset.mobile] = [val.dataset.mobile, val.src]
  //   });
  // };
  //
  // imgReplace();

});

document.addEventListener('DOMContentLoaded', () => {

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
              }, 1000);
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
      groupTabs = document.querySelector('.nj-tabs__group-tabs'),
      tabInfo = document.querySelectorAll('.nj-tabs__info');

    if (groupTabs) {
      function showTabInfo(item) {
        tabInfo.forEach(currentTab => currentTab
          .classList.remove('nj-tabs__info_show', 'animate__animated', 'animate__fadeInDown', 'animate__fadeInLeft'));

        tabInfo.forEach(() => {
          if (innerWidth >= 991) {
            tabInfo[item].classList.add('nj-tabs__info_show', 'animate__animated', 'animate__fadeInDown');
          } else {
            tabInfo[item].classList.add('nj-tabs__info_show', 'animate__animated', 'animate__fadeInUp');
          }
        });
      }

      groupTabs.addEventListener('click', function(e) {
        e.preventDefault()
        let target = e.target,
          titleTab = target.closest('.nj-tabs__title');

        let nodeObj = document.querySelector('.nj-tabs__group');

        nodeObj.scrollIntoView({
          behavior: "smooth",
          block:    "center"
        });

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
    }

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

