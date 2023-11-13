import { Application, viewEngine, oakAdapter, etaEngine } from "./deps.ts";
import router from "./router.ts"

const port = 8080;
const app = new Application();

app.use(viewEngine(oakAdapter, etaEngine, {
  viewRoot: <string>"./views", 
}));

app.use(async (ctx, next) => {
  console.log(`HTTP ${ctx.request.method} on ${ctx.request.url}`);
  await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', () => {
  console.log(`ECOUTE SUR http://localhost:${port}`);
});
await app.listen({ port });
