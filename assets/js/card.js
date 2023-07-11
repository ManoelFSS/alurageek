const consoles_cards = document.querySelector('#consoles_cards')
const games_cards = document.querySelector('#games_cards')
const acessorios_cards = document.querySelector('#acessorios_cards')

const respostaAPIi = JSON.parse(localStorage.getItem("db_api"));


// funçao geradora de cards

function geraCard (e, secao){

    const card = document.createElement('div')
    card.innerHTML = `
        <div class="card">
            <div>
                <img src="${e.image}" alt="ps5">
            </div>
            <div class="card_text_area">
                <h3 class="title_card">${e.nome}</h3>
                <p class="prace_card">R$ ${e.preco.toFixed(2)} reais</p>
                <div>
                    <a href="#">Ver produto</a>
                </div>
            </div>
        </div>
    `;

    secao.appendChild(card);

}


// funçao filter categorias
function filtrarPorNomeOuCategoria(categoria) {
   
  return respostaAPIi.filter(produto => {
    // Verifica se o nome do produto ou categoria do produto correspondem aos critérios de filtro
    const categoriaCorresponde = categoria ? produto.categoria_id === categoria : true;
    
    return categoriaCorresponde;
  });
}


// variaves com valores retornados do filter

const consoles = filtrarPorNomeOuCategoria('consoles')
const games = filtrarPorNomeOuCategoria('games')
const acessorios = filtrarPorNomeOuCategoria('acessorios')


// rederizando e mapeando  items do array
function hendle_produtos(e, secao){
    e.slice(0, 6).map((e)=>{
        geraCard(e, secao);
    })
}

// chamada da funçao hendle_produtos
hendle_produtos(consoles, consoles_cards)
hendle_produtos(games, games_cards )
hendle_produtos(acessorios, acessorios_cards)




