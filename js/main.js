// burger hander

(function() {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector ('.nav');
  const menuCloseItem = document.querySelector ('.header-nav-close');
  burgerItem.addEventListener('click', () => {
  menu.classList.add('header-nav-active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header-nav-active');
  });
}());
