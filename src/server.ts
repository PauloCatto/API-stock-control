import app from "./app";
import serverless from "serverless-http";

const PORT = process.env.PORT || 3333;

const handler = serverless(app);

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

export default handler;
