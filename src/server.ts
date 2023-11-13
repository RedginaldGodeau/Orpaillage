import { Application } from "./deps.ts";
import router from "./router.ts"

const port = 8080;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', () => {
  console.log(`ECOUTE SUR http://localhost:${port}`);
});
await app.listen({ port });
