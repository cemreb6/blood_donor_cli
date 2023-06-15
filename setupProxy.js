import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from "cors";
export default function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://blooddonorapigateway20230611141343.azurewebsites.net',
      changeOrigin: true,
    })
  );
  app.use(cors({origin: true, credentials: true}))
};
