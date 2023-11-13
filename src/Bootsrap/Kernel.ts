import { Application, viewEngine, ejsEngine, oakAdapter, load, Router, serve } from "./deps.ts";

class Kernel {
    Route : Router;
    Env : Array<any>

    async init () {
        const env = await load();
        const port = env["PORT"];
        const app = new Application();

        app.use(viewEngine(oakAdapter, ejsEngine, {viewRoot: "./templates"}));

        const router = new Router();

        

        for await (const controller of Deno.readDir(`./src/Controller`)) {
            import(`../Controller/${controller.name}`)
        }

        app.use(router.routes());
        app.use(router.allowedMethods());
        

        this.Env = env;
        this.Route = router;

        await app.listen({ port });
    }

    constructor () {
        this.init();
    }
}

export default new Kernel()