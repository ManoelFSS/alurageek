

async function fazerRequisicao() {
    try {
      const url = 'https://raw.githubusercontent.com/ManoelFSS/db_json/main/db.json';
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Erro na requisição: ' + response.status);
      }
      
      const data = await response.json();

      console.log(data)
      localStorage.setItem('db_produtos', JSON.stringify(data)) ?? [];   
       
    } catch (error) {
      console.error(error);
    }
  }
  fazerRequisicao()
