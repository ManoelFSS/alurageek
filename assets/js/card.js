function container_produtos(secao) {

    const area_produtos = document.querySelector('.area_produtos')
    const area_card = document.createElement('div')
    area_card.innerHTML = `
        <section class="produtoss" id="${secao}">
            <div class="produto_title">
                <h3>${secao}</h3>
            </div>
            <div id="${secao}_cards">
                
            </div>
        </section>
    `;

    // add um filho no container area_produtos
    area_produtos.appendChild(area_card);

    // pegando a seçao especifica passada por parametro
    const secao_cards = document.querySelector(`#${secao}_cards`)

    // chamada da funçao hendle_produtos
    const atualiza_produtos = () => {
        hendle_produtos(filtrarPorNomeOuCategoria(secao), secao_cards)
    }

    setTimeout(atualiza_produtos, 100)

}


// pegando os dados do localStorage
const respostalocalStorage = JSON.parse(localStorage.getItem("db_produtos"));

// pegando dados das categorias 
const categorias = respostalocalStorage.categorias.map(e => e.nome)

// passando os dados das categorias para a funçao container_produtos assim rederizando as seçoes
for (let i = 0; i < categorias.length; i++) {
    container_produtos(categorias[i])
}


// funçao filter categorias
function filtrarPorNomeOuCategoria(categoria) {

    return respostalocalStorage.produtos.filter(produto => {
        // Verifica se o nome do produto ou categoria do produto correspondem aos critérios de filtro
        const categoriaCorresponde = categoria ? produto.categoria_id === categoria : true;
        return categoriaCorresponde;
    });

}

// funçao geradora de cards

function geraCard(e, secao) {

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
function hendle_produtos(e, secao) {

    e.slice(0, 6).map((e) => {
        geraCard(e, secao);
    })
}
