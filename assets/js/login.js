const Login = document.querySelector('.Login');



Login.addEventListener('click', ()=>{
    event.preventDefault();

   const menu = document.querySelector(".header_container").offsetHeight;
   console.log(menu);
   const menu_nav = document.querySelector("header nav");
   const areaLogin =  document.querySelector('#area_Login');
  
   document.querySelector('#areaProdutos').style.display = 'none';

   Login.style.display  = 'none';
   menu_nav.style.display  = 'none';
   areaLogin.style.display = "flex";
   areaLogin.style.marginTop = `${ menu }px`;

})