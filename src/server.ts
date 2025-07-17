import app from './app';

const port = process.env.PORT || 10000;

app.listen(port, () => {
  console.log(`🟢 Servidor rodando na porta ${port}`);
});

