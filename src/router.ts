import { Router } from "./deps";

export default new Router()
    .get("/", ctx => ctx.render("views/index.html"));