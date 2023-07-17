const Login = document.querySelector('.Login');
const menu_nav = document.querySelector("header nav");
const areaLogin =  document.querySelector('#area_Login');
const btn_entrar = document.querySelector('#btn_entrar');
const areaProdutos = document.querySelector('#areaProdutos');

btn_entrar.addEventListener('click', ()=>{
    Login.style.display  = 'flex';
    menu_nav.style.display  = 'flex';
    areaLogin.style.display = "none";
    areaProdutos.style.display  = 'block';
});

Login.addEventListener('click', ()=>{
   event.preventDefault();
   const menu = document.querySelector(".header_container").offsetHeight;
   areaProdutos.style.display  = 'none';
   Login.style.display  = 'none';
   menu_nav.style.display  = 'none';
   areaLogin.style.display = "flex";
   areaLogin.style.marginTop = `${ menu }px`;

})