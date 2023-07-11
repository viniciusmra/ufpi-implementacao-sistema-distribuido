var path = require('path');

const express = require('express');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname,'..', 'public')));

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});