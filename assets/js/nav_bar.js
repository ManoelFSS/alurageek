var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // Rolar para baixo
    acaoAoRolarParaBaixo();
  } else {
    // Rolar para cima
    acaoAoRolarParaCima();
  }

  lastScrollTop = currentScrollTop;
});

const widt_page = document.documentElement.clientWidth;

function acaoAoRolarParaBaixo() {
    document.querySelector("nav").classList.add('nav')
}

function acaoAoRolarParaCima() {
    document.querySelector("nav").classList.remove('nav')
}




const menu = document.querySelectorAll('header nav a')

let activeMenu = null; // Variável para armazenar o item de menu ativo

menu.forEach((e)=>{
  document.querySelector("nav").classList.toggle('nav')
      e.addEventListener('click', ()=>{
        event.preventDefault()

        const links = document.querySelectorAll('header nav a')

        for(let i = 0; i < links.length; i++){
          links[i].classList.remove('nav_bar_ativo');
        }

        e.classList.add('nav_bar_ativo')
      
        // Verifica se o item de menu clicado é o mesmo que já está ativo
        if (activeMenu === e) {
          return; // Ignora a rolagem
        }

        // Atualiza o item de menu ativo
        activeMenu = e;

        var menu = document.querySelector(".header_container").offsetHeight;
        var menu_nav = document.querySelector("header nav").offsetHeight;

        if (e.innerHTML === "consoles" || e.innerHTML === "games" || e.innerHTML === "acessorios" || e.innerHTML === "contato") {
          var section = document.getElementById(e.innerHTML);
          var offsetTop = section.offsetTop - (menu + menu_nav);
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          offsetTop = ''
        }
        
      });
            
});
 
