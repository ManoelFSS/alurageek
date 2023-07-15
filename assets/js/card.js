
// funçao filter categorias
function filtrarPorNomeOuCategoria(categoria) {
    
    const respostalocalStorage = JSON.parse(localStorage.getItem("db_produtos")); 
    
    return respostalocalStorage.produtos.filter(produto => {
    // Verifica se o nome do produto ou categoria do produto correspondem aos critérios de filtro
    const categoriaCorresponde = categoria ? produto.categoria_id === categoria : true;
    return categoriaCorresponde;
  });

}

const consoles_cards = document.querySelector('#consoles_cards')
const games_cards = document.querySelector('#games_cards')
const acessorios_cards = document.querySelector('#acessorios_cards')

// chamada da funçao hendle_produtos

const atualiza_produtos = () =>{
  hendle_produtos(filtrarPorNomeOuCategoria('consoles'), consoles_cards)
  hendle_produtos(filtrarPorNomeOuCategoria('games'), games_cards )
  hendle_produtos(filtrarPorNomeOuCategoria('acessorios'), acessorios_cards)
}

// chama a funçao  atualiza_produtos apois o carregamento da pagina assim garantindo que os cards sejam rederizados
setTimeout(atualiza_produtos, 100)
  
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
            <p class="descricao_card"> ${e.descricao}</p>
            <p class="prace_card">R$ ${e.preco.toFixed(2)} reais</p>
            <div>
                <a class="verProduto" href="#">Ver produto</a>
            </div>
        </div>
    </div>
`;

secao.appendChild(card);

}


// rederizando e mapeando  items do array
function hendle_produtos(e, secao){
    
    e.slice(0,6).map((e)=>{
        geraCard(e, secao);
    })
}
