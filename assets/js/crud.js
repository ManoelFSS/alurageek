


const getLocalStore = () => JSON.parse(localStorage.getItem('db_produtos')) ?? [];
const setLocalStore = (db_Cliente) => localStorage.setItem('db_produtos', JSON.stringify(db_Cliente));
const LerturaClientes = () => getLocalStore();


let lista = [LerturaClientes()]

console.log(lista)

const hendle_produtos = (e, index) => {
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




const map_card = (e) => {

    e.map((e, index) => {
        hendle_produtos(e, index)
    })


}


function excluir(index) {
    lista[0].produtos.splice(index, 1)

    localStorage.setItem('db_produtos', JSON.stringify(lista[0]))

    reload()
    window.location.reload();
}

function editar(index) {

    let item = lista[0].produtos[index]

    // Preencha os campos do formulário com os dados do produto selecionado para edição
    document.getElementById('image').value = item.image;
    document.getElementById('nome').value = item.nome;
    document.getElementById('descricao').value = item.descricao;
    document.getElementById('preco').value = item.preco;
    document.getElementById('categoria_id').value = item.categoria_id;

    // Guarda o índice do produto sendo editado para uso posterior (pode ser útil ao salvar as alterações)
    document.getElementById('indice-edicao').value = index;
    modal_abrir()
}

function reload() {
    map_card(filtrarPorNomeOuCategoria())

}
reload()

const add_produtos = document.querySelector('.add_produtos')
const editar_form = document.querySelector('.editar_form')
const fechar = document.querySelector('#fechar')
const area_todos_produtos = document.querySelector('.area_todos_produtos')

function modal_abrir() {
    editar_form.style.display = 'flex'
    area_todos_produtos.style.display = 'none'
}

function modal_fechar() {
    editar_form.style.display = 'none'
    area_todos_produtos.style.display = 'block'
}




function salvarEdicao() {
    const index = parseInt(document.getElementById('indice-edicao').value);
    const image = document.getElementById('image').value;
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const categoria = document.getElementById('categoria_id').value;


    // Faça as validações necessárias antes de atualizar o produto
    if (nome.trim() === '' || image.trim() === '' || categoria.trim() === '' || descricao.trim() === '' || isNaN(preco) || preco <= 0) {
        alert('Por favor, preencha os campos corretamente.');
        return;
    }

    const novoProduto = {
        image: image,
        nome: nome,
        descricao: descricao,
        preco: preco,
        categoria_id: categoria
        // Outros campos do novo produto, se houver
    };

    const novaCategoria = {

        id: 1,
        nome: categoria

    }

    if (Number.isInteger(index)) {
        // Se o índice for um número, significa que estamos editando um produto existente
        lista[0].produtos[index] = novoProduto;
        lista[0].categorias[index] = novaCategoria;
    } else {
        // Caso contrário, estaremos adicionando um novo produto à lista
        lista[0].produtos.push(novoProduto);
        lista[0].categorias.push(novaCategoria);
    }



    localStorage.setItem('db_produtos', JSON.stringify(lista[0]));

    // Recarregue a lista de produtos após a edição
    reload();
    modal_fechar()
    window.location.reload();
}


function adicionarNovo() {
    salvarProduto(-1);
    limpa_inputs()

}


const limpa_inputs = () => {
    // Limpe os campos do formulário após adicionar o novo produto
    document.getElementById('image').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('preco').value;
    document.getElementById('categoria_id').value = '';
}

//events

add_produtos.addEventListener('click', () => {
    modal_abrir()
    limpa_inputs()
})

fechar.addEventListener('click', () => {
    modal_fechar()
    limpa_inputs()
})

