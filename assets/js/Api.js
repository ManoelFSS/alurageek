
 
 async function fazerRequisicao() {
    try {
      const resposta = await fetch('https://raw.githubusercontent.com/ManoelFSS/alurageek/main/db.json');
      
      if (!resposta.ok) {
        throw new Error('Erro na requisição: ' + resposta.status);
      }
      
      const dados = await resposta.json();
    

      localStorage.setItem("db_produtos",JSON.stringify(dados));
      // Faça o que desejar com os dados retornados
 
      
    } catch (erro) {
      consol
      e.error('Ocorreu um erro:', erro);
    }

    const consoles_cards = document.querySelector('#consoles_cards')
    const games_cards = document.querySelector('#games_cards')
    const acessorios_cards = document.querySelector('#acessorios_cards')
    const respostaAPIi = JSON.parse(localStorage.getItem("db_produtos"));

    // funçao filter categorias
    function filtrarPorNomeOuCategoria(categoria) {
      
      return respostaAPIi.filter(produto => {
        // Verifica se o nome do produto ou categoria do produto correspondem aos critérios de filtro
        const categoriaCorresponde = categoria ? produto.categoria_id === categoria : true;
        
        return categoriaCorresponde;
      });
    }

    // chamada da funçao hendle_produtos
    hendle_produtos(filtrarPorNomeOuCategoria('consoles'), consoles_cards)
    hendle_produtos(filtrarPorNomeOuCategoria('games'), games_cards )
    hendle_produtos(filtrarPorNomeOuCategoria('acessorios'), acessorios_cards)
      
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


  // rederizando e mapeando  items do array
  function hendle_produtos(e, secao){
    e.slice(0, 6).map((e)=>{
        geraCard(e, secao);
    })
  }


}

fazerRequisicao();



  













  