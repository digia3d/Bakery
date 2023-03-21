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
