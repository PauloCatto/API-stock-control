import app from "./app";
import serverless from "serverless-http";

const handler = serverless(app);

export default handler;

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3333;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
} else {
  console.log("Rodando em produção - sem app.listen()");
}
