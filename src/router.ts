import { Router } from "./deps.ts";

export default new Router()
    .get("/", ctx => ctx.response.body = "Hello from deno with oak");