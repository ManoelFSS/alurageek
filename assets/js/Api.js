
 
 async function fazerRequisicao() {
    try {
      const resposta = await fetch('http://localhost:3000/produtos'); // Substitua pela URL da sua API
      
      if (!resposta.ok) {
        throw new Error('Erro na requisição: ' + resposta.status);
      }
      
      const dados = await resposta.json();

      localStorage.setItem("db_api",JSON.stringify(dados));
      // Faça o que desejar com os dados retornados
 
      
    } catch (erro) {
      console.error('Ocorreu um erro:', erro);
    }
  }

fazerRequisicao();




  


 

  