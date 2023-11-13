import { Router } from "./deps.ts";

export default new Router()
    .get("/", ctx => ctx.render("./index.html", {}));