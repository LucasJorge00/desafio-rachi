const menuMobile = document.querySelector(".menu__mobile");

const toggleMenu = () => {
  const menuNav = document.querySelector(".menu");
  menuNav.classList.toggle("active");
};

menuMobile.addEventListener("click", toggleMenu);
