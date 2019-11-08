document.addEventListener('DOMContentLoaded', () => {

  const openMenu = document.getElementById('openMenu');
  const closeMenu = document.getElementById('closeMenu');
  const overlay = document.getElementById('overlay');
  const navSidebar = document.getElementById('navSidebar');

  const bp = {
    'sm': 767,
    'lg': 1200
  };

  openMenu.addEventListener('click', () => sidebarMenu());
  closeMenu.addEventListener('click', () => sidebarMenu());
  overlay.addEventListener('click', () => sidebarMenu());

  function sidebarMenu() {
    overlay.classList.toggle('overlay-open');
    navSidebar.classList.toggle('nav-sidebar-open');   
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > bp.sm) {
      overlay.classList.remove('overlay-open');
      navSidebar.classList.remove('nav-sidebar-open');   
    }
  });



});