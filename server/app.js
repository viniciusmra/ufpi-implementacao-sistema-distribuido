var path = require('path');
const express = require('express');
const app = express();
//const port = 3000;
const port = process.env.PORT ?? 8080;

// Indica os arquivos estáticos do servidor que são acessíveis ao cliente
app.use(express.static(path.join(__dirname,'..', 'public')));

// Faz a chamada a API REST COUNTRIES com os parametros fornecidos pelo front-end e retorna os dados solicitados
app.get('/get-data', async (req, res) => {
  const {data_filter} = req.query;
  console.log(`Foi recebida uma solicitação para: ${data_filter}, solicitando dados para API`)
  try {
    const response = await fetch(`https://restcountries.com/v3.1/${data_filter}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter os dados da API externa' });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});