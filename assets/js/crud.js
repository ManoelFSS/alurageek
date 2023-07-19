


const getLocalStore = () => JSON.parse(localStorage.getItem('db_produtos')) ?? [];
const setLocalStore = (db_Cliente) => localStorage.setItem('db_produtos', JSON.stringify(db_Cliente));
function tras(){

    const LerturaClientes = getLocalStore();
 
    return LerturaClientes
  
}
const LerturaClientes = () =>  tras();

let lista = [LerturaClientes()]

console.log(lista)

const hendle_produtos = (e, index)=>{
    const container_produtos = document.querySelector('.container_produtos')
    const card = document.createElement('div');
    card.innerHTML = `
        <div class="card">
            <div class="area_btns">
                <span class="excluir" onclick="excluir(${index})" ></span>
                <span class="editar" onclick="editar(${index})"  ></span>
            </div>
            <div>
                <img src="${e.image}" alt="ps5">
            </div>
            <div class="card_text_area">
                <h3 class="title_card">${e.nome}</h3>
                <p class="descricao_card"> ${e.descricao}</p>
                <p class="prace_card">R$ ${e.preco.toFixed(2)} reais</p>
            </div>
        </div>
    `;

    container_produtos.appendChild(card)
}

function filtrarPorNomeOuCategoria(categoria) {
    const data_produtos = getLocalStore();
 
    // Check if the category filter is specified
    if (categoria) {
        
        return data_produtos.produtos.filter(produto => {
          
            // Verifies if the name or category of the product corresponds to the filter criteria
            const categoriaCorresponde = produto.nome.toLowerCase().startsWith(categoria.toLowerCase());
    
            return categoriaCorresponde;
            
        });
    } else {
        // If no category filter is specified, return all products
        return data_produtos.produtos;
        
    }
   
}




const map_card = (e) =>{

   e.map((e, index)=> {
        hendle_produtos(e, index)
   })


}


function excluir(index){
    lista[0].produtos.splice(index,1)
    console.log(lista)
    
     localStorage.setItem('db_produtos', JSON.stringify(lista[0]))
    
     reload()
     window.location.reload();
}

function reload(){
    map_card(filtrarPorNomeOuCategoria())
   
}
reload()

