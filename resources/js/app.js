/*
 * Сборка проекта: зависимости, начальная загрузка
 */

/* JQuery */
import $ from 'jquery';
window.$ = window.jQuery = $;

/* Animation with JS */
/*import anime from 'animejs';
window.anime = anime;*/

/* Poper + Bootstrap */
import 'popper.js';
import 'bootstrap';

/* Fancybox */
require('@fancyapps/fancybox');

/* Slick slider */
require('slick-carousel');

/* Fullpage.js */
require('fullpage.js');

require('hc-offcanvas-nav');

/* Masonry Grid */
import Masonry from 'masonry-layout';
window.Masonry = Masonry;

/* Parallax JS */
import Parallax from 'parallax-js'
window.Parallax = Parallax;