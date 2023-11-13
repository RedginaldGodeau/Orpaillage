import { Application } from "./deps.ts";
const port = 8080;
const app = new Application();


app.use((ctx) => {
  console.log(`HTTP ${ctx.request.method} on ${ctx.request.url}`);
});

app.use((ctx) => {
  ctx.response.body = "Hello Deno";
});

await app.listen({ port });
