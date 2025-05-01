import app from './app';
import serverless from 'serverless-http';

const isVercel = process.env.VERCEL === '1';
const handler = serverless(app);

if (!isVercel && process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3333;
  app.listen(PORT, () => {
    console.log(`🟢 Servidor LOCAL rodando: http://localhost:${PORT}`);
  });
}

export default handler;