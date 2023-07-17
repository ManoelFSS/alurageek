


const getLocalStore = () => JSON.parse(localStorage.getItem('db_produtos')) ?? [];
const setLocalStore = (db_Cliente) => localStorage.setItem('db_produtos', JSON.stringify(db_Cliente));
console.log(getLocalStore())
const LerturaClientes = () => getLocalStore();

const createCliente = (clientes) => {
    const db_Cliente = getLocalStore();
    db_Cliente.push(clientes);
    setLocalStore(db_Cliente);
};

createCliente()


// const deleteCliente = (index) =>{
//     const db_Cliente = LerturaClientes();
//     db_Cliente.splice(index, 1)
//     setLocalStore(db_Cliente)
// };

// const isValidFields = () => {
//     return document.querySelector('#form').reportValidity()
// };

// const salveCliente = () => {

//     if(isValidFields()){
//         const cliente = {
//             nome: document.getElementById('nome').value,
//             email: document.getElementById('email').value,
//             celular: document.getElementById('celular').value,
//             cidade: document.getElementById('cidade').value
//         };

//         const index = document.querySelector('#nome').dataset.index
        
//         if(index === 'new'){
//             createCliente(cliente)
//             formClose()
//             closeModal()
//             updateTable()
//         }else{
//             updateCliente(index, cliente)
//             updateTable()
//             closeModal()
//         }
     
//     }
// };


// const formClose = () => {
//     document.querySelectorAll('#form input').forEach((e) => {
//         e.value = '';
//     });
// };

// const updateCliente = (index, cliente) =>{
//     const db_Cliente = LerturaClientes();
//     db_Cliente[index] = cliente;
//     setLocalStore(db_Cliente)
// };

// const createRow = (clientes, index) => {
//     const newRow = document.createElement('tr');
//     newRow.innerHTML = `
//         <td>${clientes.nome}</td>
//         <td>${clientes.email}</td>
//         <td>${clientes.celular}</td>
//         <td>${clientes.cidade}</td>
//         <td>
//             <button type="button" class="button green" data-action="edit-${index}">editar</button>
//             <button type="button" class="button red" id="btn_delete" data-action="delete-${index}" >excluir</button>
//         </td>
//     `;
//     const tbody = document.querySelector('#table_clientes>tbody');
//     tbody.appendChild(newRow);
// };


// const clearClientes = () => {
//     const rows = document.querySelectorAll('#table_clientes>tbody tr');
//     rows.forEach((e) => e.remove() )
// };

// const  hendleForm = (cliente) =>{
   
//     document.getElementById('nome').value = cliente.nome
//     document.getElementById('email').value = cliente.email
//     document.getElementById('celular').value = cliente.celular
//     document.getElementById('cidade').value = cliente.cidade
//     document.querySelector('#modal').classList.add('active');
//     document.querySelector('#nome').dataset.index = cliente.index
// };


// const editCliente = (index)=>{
//     const cliente = LerturaClientes()[index];
//     cliente.index = index
//     console.log(cliente)
//     hendleForm(cliente)
// };


// const editDelet = (e) => {
//     if(e.target.type === 'button'){
//         const [action, index] = e.target.dataset.action.split('-');

//         if(action === 'edit'){
//            editCliente(index)
//         }else{
//             const client = LerturaClientes()[index]
//             const response = confirm(`Deseja realmente excluir o cliente ${client.nome}`)
//             console.log(response)
//             if (response) {
//                 deleteCliente(index)
//                 clearClientes()
//                 updateTable()
//             }
//         }
   
//     }
   
// }

// const updateTable = () => {
//     const db_Cliente = LerturaClientes();
//     db_Cliente.forEach(createRow);
// };

// updateTable()

// const closeModal = () =>{
//     document.querySelector('#modal').classList.remove('active')
// };

// // eventos

// document.querySelector('#salvar')
//     .addEventListener('click', ()=> {    
//         clearClientes()   
//         salveCliente();
//     });


// // funçoes de abre /fecha modal com tres seleçoes de id #modalClose, #cancelar, #cadastrarCliente
// // assim usando if() para ter uma condiçao de fechamento ou abertura

//  const  modalClose = document.querySelectorAll('#modalClose, #cancelar, #cadastrarCliente');

//         modalClose.forEach((e) => {
//             e.addEventListener('click', () => {
//                 if(e.classList.value === 'button blue' || e.classList.value === 'modal-close'){
//                      closeModal()
//                      formClose()
//                 }else{
//                     document.querySelector('#modal').classList.add('active');
//                 }
//             });
//         });


// document.querySelector('#table_clientes>tbody')
//         .addEventListener('click', editDelet)






