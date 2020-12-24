'use strict';
const $hamburger = document.getElementById('hamburger');
$hamburger.addEventListener('click',(evt)=>{

  const $logo = document.querySelector('.navbar .navbar-logo');
  const $menu = document.querySelector('.navbar .navbar-menu');
  const $sns  = document.querySelector('.navbar .navbar-sns');

  $logo.classList.toggle('active');
  $menu.classList.toggle('active');
  $sns.classList.toggle('active');
});