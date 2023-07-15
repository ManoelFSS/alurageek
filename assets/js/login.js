const Login = document.querySelector('.Login');



Login.addEventListener('click', ()=>{
    event.preventDefault();

   const menu = document.querySelector(".header_container").offsetHeight;
   const menu_nav = document.querySelector("header nav").offsetHeight;
   const header_container = document.querySelector('.header_container');
   const areaLogin =  document.querySelector('#area_Login');
   const larguraPagina = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
   document.querySelector('#areaProdutos').style.display = 'none';

   Login.style.display  = 'none'
   header_container.style.flexDirection = larguraPagina <= 435 ? 'column' : larguraPagina > 435 ? '' : 'colun';
   areaLogin.style.display = "flex";
   areaLogin.style.marginTop = `${ menu + menu_nav}px`;

})