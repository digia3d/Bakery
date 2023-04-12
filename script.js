/* global $ */

const mainbody = document.querySelector('.mainbody');
const menuList = document.querySelector('.list');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.menu-closebtn .times');
const menuItems = Array.from(document.querySelectorAll('.item'));

hamburger.addEventListener('click', () => {
  menuList.classList.add('active');
  closeIcon.classList.add('icon');
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    menuItems.forEach((Item) => { Item.classList.remove('active'); });
    menuList.classList.remove('active');
    menuItem.classList.add('active');

    if (menuItem.textContent === 'home' && !mainbody.classList.contains('homepage')) {
      localStorage.setItem(menuItem.textContent, 'active');
    }
  });
});

window.addEventListener('resize', () => {
  if (mainbody.clientWidth >= 768 && menuList.classList.contains('active')) {
    window.location.reload();
  }
});

$(document).ready(() => {
  const interval = 3000; // set the interval time in milliseconds
  const slides = $('.slide');
  let currentIndex = 0;
  const maxIndex = slides.length - 1;

  function slide() {
    slides.eq(currentIndex).fadeOut(500);
    currentIndex += 1;
    if (currentIndex > maxIndex) {
      currentIndex = 0;
    }
    slides.eq(currentIndex).fadeIn(500);
  }

  setInterval(slide, interval);
});

function scrollFunction() {
  var myTopBtn = document.getElementById('myTopBtn');
  if (myTopBtn !== null) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myTopBtn.style.display = 'block';
    } else {
      myTopBtn.style.display = 'none';
    }
  }
}

window.onscroll = function() { scrollFunction(); };

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}